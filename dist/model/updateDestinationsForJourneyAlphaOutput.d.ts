import { DestinationsInner } from './destinationsInner';
export declare class UpdateDestinationsForJourneyAlphaOutput {
    'containerId': string;
    'version'?: number;
    'destinations': Array<DestinationsInner>;
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
