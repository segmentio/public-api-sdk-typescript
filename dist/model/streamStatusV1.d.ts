import { DestinationStatusV1 } from './destinationStatusV1';
export declare class StreamStatusV1 {
    'id': string;
    'destinationStatus': Array<DestinationStatusV1>;
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
