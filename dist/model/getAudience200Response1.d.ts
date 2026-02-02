import { GetAudienceBetaOutput } from './getAudienceBetaOutput';
export declare class GetAudience200Response1 {
    'data'?: GetAudienceBetaOutput;
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
