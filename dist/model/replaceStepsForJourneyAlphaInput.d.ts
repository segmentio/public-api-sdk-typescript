import { JourneyState } from './journeyState';
export declare class ReplaceStepsForJourneyAlphaInput {
    'initialState': string;
    'states': Array<JourneyState>;
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
