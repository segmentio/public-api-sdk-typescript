import { GetAudienceCsvExportFromSpaceAndAudienceAlphaOutput } from './getAudienceCsvExportFromSpaceAndAudienceAlphaOutput';
export declare class GetAudienceCsvExportFromSpaceAndAudience200Response {
    'data'?: GetAudienceCsvExportFromSpaceAndAudienceAlphaOutput;
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
