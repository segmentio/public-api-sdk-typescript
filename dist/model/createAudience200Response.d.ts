import { CreateAudienceAlphaOutput } from './createAudienceAlphaOutput';
export declare class CreateAudience200Response {
    'data'?: CreateAudienceAlphaOutput;
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
