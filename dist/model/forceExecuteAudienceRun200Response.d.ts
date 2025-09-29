import { ForceExecuteAudienceRunAlphaOutput } from './forceExecuteAudienceRunAlphaOutput';
export declare class ForceExecuteAudienceRun200Response {
    'data'?: ForceExecuteAudienceRunAlphaOutput;
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
