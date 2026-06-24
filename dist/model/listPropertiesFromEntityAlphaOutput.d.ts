import { EntityPropertyAlpha } from './entityPropertyAlpha';
import { ForwardOnlyPaginationOutput } from './forwardOnlyPaginationOutput';
export declare class ListPropertiesFromEntityAlphaOutput {
    'entityProperties': Array<EntityPropertyAlpha>;
    'pagination': ForwardOnlyPaginationOutput;
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
