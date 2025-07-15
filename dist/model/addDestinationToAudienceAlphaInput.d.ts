import { DestinationInput } from './destinationInput';
export declare class AddDestinationToAudienceAlphaInput {
    'versionSchema': string;
    'workspaceId': string;
    'destination': DestinationInput;
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
