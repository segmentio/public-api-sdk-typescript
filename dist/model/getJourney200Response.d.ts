import { GetJourneyAlphaOutput } from './getJourneyAlphaOutput';
export declare class GetJourney200Response {
    'data'?: GetJourneyAlphaOutput;
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
