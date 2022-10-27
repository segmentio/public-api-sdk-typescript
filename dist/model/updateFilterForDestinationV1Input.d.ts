import { DestinationFilterActionV1 } from './destinationFilterActionV1';
export declare class UpdateFilterForDestinationV1Input {
    'if'?: string;
    'actions'?: Array<DestinationFilterActionV1>;
    'title'?: string;
    'description'?: string | null;
    'enabled'?: boolean;
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
