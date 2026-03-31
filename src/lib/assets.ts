import { ASSET_SOURCE } from '../config/assetSource';

/**
 * Universal Asset Resolver
 * 
 * Resolves asset paths based on the configured asset source (External CDN, Local, Dealer API).
 * Usage: <img src={getAsset("honda2wheelersindia/path/to/image.png")} />
 *
 * @param path - The relative path of the asset (without leading slash usually, but we handle it)
 * @returns The full URL to the asset
 */
export function getAsset(path: string): string {
    // Normalize path: Remove leading slash if present to avoid double slashes with baseUrl
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Runtime Override (Client-side only)
    // This allows the DevTools panel to swap sources instantly
    let config = { ...ASSET_SOURCE };
    if (typeof window !== 'undefined') {
        const override = localStorage.getItem('honda_asset_source_override');
        if (override) {
            try {
                const parsed = JSON.parse(override);
                if (parsed.type && parsed.baseUrl) {
                    config = parsed;
                }
            } catch (e) {
                // failed to parse, ignore
            }
        }
    }

    if (config.type === 'external' || config.type === 'dealer') {
        let baseUrl = config.baseUrl;

        // Validation: Ensure valid URL structure for external sources
        if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
            // If the user messed up the config (e.g. put a relative path), fallback or try to fix
            console.warn("Invalid Asset Base URL configured:", baseUrl);
            return `/${cleanPath}`; // Fallback to local
        }

        // Ensure baseUrl doesn't end with slash
        baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

        return `${baseUrl}/${cleanPath}`;
    }

    // Fallback or Local mode
    // If local, we might just return the path (assuming it's in public folder)
    // But we might need to handle specific logic for local assets if they are different.
    // For now, let's assume local assets are just served from root.
    // Fallback or Local mode
    // Ensure it starts with a slash
    return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
}
