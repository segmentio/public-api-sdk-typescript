import { UpdateAudienceForSpaceOutput } from './updateAudienceForSpaceOutput';
export declare class UpdateAudienceForSpace200Response {
    'data'?: UpdateAudienceForSpaceOutput;
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
