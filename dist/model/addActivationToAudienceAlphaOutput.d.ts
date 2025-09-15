import { ActivationOutput } from './activationOutput';
export declare class AddActivationToAudienceAlphaOutput {
    'activation': ActivationOutput;
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
