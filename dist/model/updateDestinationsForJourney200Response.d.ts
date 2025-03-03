import { UpdateDestinationsForJourneyAlphaOutput } from './updateDestinationsForJourneyAlphaOutput';
export declare class UpdateDestinationsForJourney200Response {
    'data'?: UpdateDestinationsForJourneyAlphaOutput;
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
