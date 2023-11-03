import { PaginationOutput } from './paginationOutput';
import { Version } from './version';
export declare class ListFunctionVersionsAlphaOutput {
    'versions': Array<Version>;
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
