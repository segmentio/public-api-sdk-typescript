import { DestinationFilterActionV1 } from './destinationFilterActionV1';
export declare class Filter2 {
    'id': string;
    'sourceId': string;
    'destinationId': string;
    'if': string;
    'actions': Array<DestinationFilterActionV1>;
    'title': string;
    'description'?: string;
    'enabled': boolean;
    'createdAt': string;
    'updatedAt': string;
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
