import { GetLatestFromLivePluginsAlphaOutput } from './getLatestFromLivePluginsAlphaOutput';
export declare class GetLatestFromLivePlugins200Response {
    'data'?: GetLatestFromLivePluginsAlphaOutput;
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
