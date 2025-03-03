import { UpdateDestinationsInput } from './updateDestinationsInput';
export declare class UpdateDestinationsForJourneyAlphaInput {
    'stateDestinations': Array<UpdateDestinationsInput>;
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
