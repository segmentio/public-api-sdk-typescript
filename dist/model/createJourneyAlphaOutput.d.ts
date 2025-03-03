import { JourneyDetails } from './journeyDetails';
export declare class CreateJourneyAlphaOutput {
    'journey': JourneyDetails;
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
