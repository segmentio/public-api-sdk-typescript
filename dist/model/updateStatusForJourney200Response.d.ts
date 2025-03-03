import { UpdateStatusForJourneyAlphaOutput } from './updateStatusForJourneyAlphaOutput';
export declare class UpdateStatusForJourney200Response {
    'data'?: UpdateStatusForJourneyAlphaOutput;
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
