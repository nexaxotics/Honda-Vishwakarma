import { ASSET_SOURCE } from '@/config/assetSource';

/**
 * Phase 4: Data Adapter Pattern
 * Enables swapping between different asset providers programmatically.
 */

export interface AssetProvider {
    getImage(path: string): string;
}

export class ExternalCDNProvider implements AssetProvider {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    }

    getImage(path: string): string {
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${this.baseUrl}/${cleanPath}`;
    }
}

export class DealerAPIProvider implements AssetProvider {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    }

    getImage(path: string): string {
        // Example: Dealer API might need specific query params or headers logic
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${this.baseUrl}/${cleanPath}`;
    }
}

export class LocalProvider implements AssetProvider {
    getImage(path: string): string {
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `/${cleanPath}`;
    }
}

// Factory to get the configured provider
export function getProvider(): AssetProvider {
    if (ASSET_SOURCE.type === 'external') {
        return new ExternalCDNProvider(ASSET_SOURCE.baseUrl);
    }
    if (ASSET_SOURCE.type === 'dealer') {
        return new DealerAPIProvider(ASSET_SOURCE.baseUrl);
    }
    return new LocalProvider();
}
