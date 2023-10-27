import { DestinationV1 } from './destinationV1';
export declare class GetDestinationV1Output {
    'destination': DestinationV1;
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
