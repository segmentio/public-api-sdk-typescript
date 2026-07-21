import { EventTriggeredJourneySummary } from './eventTriggeredJourneySummary';
export declare class CreateJourneyAlphaOutput {
    'journey': EventTriggeredJourneySummary;
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
