import { ActivationSummaryOutput } from './activationSummaryOutput';
export declare class AddActivationToAudienceAlphaOutput {
    'activation': ActivationSummaryOutput;
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
