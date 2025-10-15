import { CreateLivePluginAlphaOutput } from './createLivePluginAlphaOutput';
export declare class CreateLivePlugin200Response {
    'data'?: CreateLivePluginAlphaOutput;
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
