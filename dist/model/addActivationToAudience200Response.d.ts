import { AddActivationToAudienceAlphaOutput } from './addActivationToAudienceAlphaOutput';
export declare class AddActivationToAudience200Response {
    'data'?: AddActivationToAudienceAlphaOutput;
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
