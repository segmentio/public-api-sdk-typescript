import { LivePluginsAlpha } from './livePluginsAlpha';
export declare class CreateLivePluginAlphaOutput {
    'livePlugin': LivePluginsAlpha;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
