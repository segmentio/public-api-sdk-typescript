import { GetActivationFromAudienceOutput } from './getActivationFromAudienceOutput';
export declare class GetActivationFromAudience200Response {
    'data'?: GetActivationFromAudienceOutput;
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
