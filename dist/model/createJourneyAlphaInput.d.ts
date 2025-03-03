import { JourneyDefinition } from './journeyDefinition';
export declare class CreateJourneyAlphaInput {
    'name': string;
    'description': string;
    'definition': JourneyDefinition;
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
