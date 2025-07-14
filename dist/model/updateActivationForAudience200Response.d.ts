import { UpdateActivationForAudienceOutput } from './updateActivationForAudienceOutput';
export declare class UpdateActivationForAudience200Response {
    'data'?: UpdateActivationForAudienceOutput;
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
