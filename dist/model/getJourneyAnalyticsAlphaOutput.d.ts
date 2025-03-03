import { JourneyAnalytics } from './journeyAnalytics';
export declare class GetJourneyAnalyticsAlphaOutput {
    'journeyAnalytics': JourneyAnalytics;
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
