import { AudienceCsvExport } from './audienceCsvExport';
export declare class AddAudienceCsvExportToAudienceAlphaOutput {
    'audienceCsvExport': AudienceCsvExport;
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
