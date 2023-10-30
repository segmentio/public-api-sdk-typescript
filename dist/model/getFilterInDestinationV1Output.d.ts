import { DestinationFilterV1 } from './destinationFilterV1';
export declare class GetFilterInDestinationV1Output {
    'filter': DestinationFilterV1;
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
