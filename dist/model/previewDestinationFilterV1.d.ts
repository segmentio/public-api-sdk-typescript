import { DestinationFilterActionV1 } from './destinationFilterActionV1';
export declare class PreviewDestinationFilterV1 {
    'if': string;
    'actions': Array<DestinationFilterActionV1>;
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
