import { GetAudienceOutput } from './getAudienceOutput';
export declare class GetAudience200Response {
    'data'?: GetAudienceOutput;
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
