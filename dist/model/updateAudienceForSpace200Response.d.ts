import { UpdateAudienceForSpaceBetaOutput } from './updateAudienceForSpaceBetaOutput';
export declare class UpdateAudienceForSpace200Response {
    'data'?: UpdateAudienceForSpaceBetaOutput;
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
