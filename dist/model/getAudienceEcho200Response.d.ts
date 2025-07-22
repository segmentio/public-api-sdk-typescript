import { GetAudienceEchoAlphaOutput } from './getAudienceEchoAlphaOutput';
export declare class GetAudienceEcho200Response {
    'data'?: GetAudienceEchoAlphaOutput;
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
