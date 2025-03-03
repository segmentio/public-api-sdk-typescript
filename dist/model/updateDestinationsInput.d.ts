import { Destination } from './destination';
export declare class UpdateDestinationsInput {
    'stateId': string;
    'destinations': Array<Destination>;
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
