import { DestinationFilterActionV1 } from './destinationFilterActionV1';
export declare class CreateFilterForDestinationV1Input {
    'sourceId'?: string;
    'if': string;
    'actions': Array<DestinationFilterActionV1>;
    'title'?: string;
    'description'?: string;
    'enabled': boolean;
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
