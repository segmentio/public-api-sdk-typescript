import { DestinationInput } from './destinationInput';
export declare class AddDestinationToAudienceAlphaInput {
    'destination': DestinationInput;
    'idSyncConfiguration'?: object;
    'connectionSettings'?: any | null;
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
