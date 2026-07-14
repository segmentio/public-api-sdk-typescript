import { EntityPathAlpha } from './entityPathAlpha';
import { PaginationOutput } from './paginationOutput';
export declare class ListEntityPathsAlphaOutput {
    'entityPaths': Array<EntityPathAlpha>;
    'pagination': PaginationOutput;
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
