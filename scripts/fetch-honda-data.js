const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.honda2wheelersindia.com';

async function fetchHondaData() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    const productsToFetch = [
        { name: 'SP 125', url: '/motorcycle/sp-125', type: 'motorcycle' },
        { name: 'Activa 125', url: '/scooter/activa125', type: 'scooter' },
        { name: 'Hornet 2.0', url: '/motorcycle/hornet20', type: 'motorcycle' },
        { name: 'Shine 125', url: '/motorcycle/shine-125', type: 'motorcycle' },
        { name: 'Dio 125', url: '/scooter/dio125', type: 'scooter' },
        { name: 'Unicorn', url: '/motorcycle/unicorn', type: 'motorcycle' },
        { name: 'CB350 Hness', url: '/motorcycle/cb350', type: 'motorcycle' },
        { name: 'NX200', url: '/motorcycle/nx200', type: 'motorcycle' }
    ];

    const allData = [];

    for (const product of productsToFetch) {
        console.log(`\n--- Fetching details for ${product.name} ---`);
        try {
            await page.goto(`${BASE_URL}${product.url}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
            await page.waitForTimeout(5000); // 5s wait for hydration

            const title = await page.evaluate(() => {
                const h1 = document.querySelector('h1');
                return h1 ? h1.innerText : null;
            });

            console.log(`Page title detected: "${title}"`);

            if (!title || title.toLowerCase().includes('404') || title.toLowerCase().includes('not found')) {
                console.warn(`Skipping ${product.name}: Page title indicates 404 or missing content.`);
                continue;
            }

            const heroImage = await page.getAttribute('.HeroBanner_HeroBanner__GZvV1 img, .HeroBanner_img img, .HeroBanner_bannerImage__... img', 'src').catch(() => '');
            console.log(`Hero image found: ${heroImage ? 'Yes' : 'No'}`);

            // 1. Fetch Colors and their specific images
            const colors = [];
            const colorButtons = await page.$$('.Product360_colorButton___N_C2');
            console.log(`Color buttons found: ${colorButtons.length}`);

            if (colorButtons.length > 0) {
                for (const btn of colorButtons) {
                    const colorNameRaw = await btn.getAttribute('aria-label');
                    const colorName = colorNameRaw ? colorNameRaw.replace('Select ', '').trim() : 'Unknown';
                    await btn.click().catch(() => { });
                    await page.waitForTimeout(1000);
                    const colorImage = await page.getAttribute('img[class*="Product360_bikeImage"]', 'src').catch(() => '');
                    if (colorImage) {
                        colors.push({ name: colorName, image: colorImage });
                    }
                }
            }

            // 2. Fetch Specifications by clicking tabs
            const specifications = {};
            const tabs = await page.$$('button:has-text("Engine"), button:has-text("Transmission"), button:has-text("Body Dimensions"), button:has-text("Dimensions"), button:has-text("Tyres")');
            console.log(`Spec tabs found: ${tabs.length}`);

            for (const tab of tabs) {
                const tabName = await tab.textContent();
                await tab.click().catch(() => { });
                await page.waitForTimeout(800);

                const tabSpecs = await page.evaluate(() => {
                    const specs = {};
                    const rows = document.querySelectorAll('.ProductSpecification_specificationRow__wPGHC');
                    rows.forEach(row => {
                        const label = row.querySelector('.ProductSpecification_specLabel__jW44f')?.innerText.trim();
                        const value = row.querySelector('.ProductSpecification_specValue__IEb9G')?.innerText.trim();
                        if (label && value) specs[label] = value;
                    });
                    return specs;
                });

                if (Object.keys(tabSpecs).length > 0) {
                    specifications[tabName.trim()] = tabSpecs;
                }
            }

            // Fallback for specs
            if (Object.keys(specifications).length === 0) {
                console.log('No tabbed specs found, trying fallback...');
                const fallbackSpecs = await page.evaluate(() => {
                    const specs = {};
                    const rows = document.querySelectorAll('.ProductSpecification_specificationRow__wPGHC, [class*="specificationsItem"]');
                    rows.forEach(row => {
                        const label = (row.querySelector('.ProductSpecification_specLabel__jW44f') || row.querySelector('div:first-child'))?.innerText.trim();
                        const value = (row.querySelector('.ProductSpecification_specValue__IEb9G') || row.querySelector('div:last-child'))?.innerText.trim();
                        if (label && value) specs[label] = value;
                    });
                    return specs;
                });
                if (Object.keys(fallbackSpecs).length > 0) specifications["General"] = fallbackSpecs;
            }

            console.log(`Specs categories collected: ${Object.keys(specifications).join(', ') || 'None'}`);

            allData.push({
                ...product,
                name: title.trim(),
                image: heroImage,
                specifications,
                colors,
                id: product.name.toLowerCase().replace(/\s+/g, '-')
            });

            console.log(`Successfully completed extraction for ${product.name}`);
        } catch (err) {
            console.error(`Error during extraction for ${product.name}:`, err.message);
        }
    }

    await browser.close();

    const outputPath = path.join(__dirname, '../src/lib/honda-product-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));
    console.log(`\nFinal Data saved to ${outputPath}`);
    console.log(`Total items collected: ${allData.length}`);
}

fetchHondaData().catch(console.error);
