import { CreateJourneyAlphaOutput } from './createJourneyAlphaOutput';
export declare class CreateJourney201Response {
    'data'?: CreateJourneyAlphaOutput;
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
