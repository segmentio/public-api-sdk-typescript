import { GetJourneyAnalyticsAlphaOutput } from './getJourneyAnalyticsAlphaOutput';
export declare class GetJourneyAnalytics200Response {
    'data'?: GetJourneyAnalyticsAlphaOutput;
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
