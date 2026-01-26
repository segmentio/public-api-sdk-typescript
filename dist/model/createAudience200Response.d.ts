import { CreateAudienceOutput } from './createAudienceOutput';
export declare class CreateAudience200Response {
    'data'?: CreateAudienceOutput;
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
