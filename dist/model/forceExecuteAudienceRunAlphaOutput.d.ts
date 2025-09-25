import { ForceExecuteAudienceRunData } from './forceExecuteAudienceRunData';
export declare class ForceExecuteAudienceRunAlphaOutput {
    'data': ForceExecuteAudienceRunData;
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
