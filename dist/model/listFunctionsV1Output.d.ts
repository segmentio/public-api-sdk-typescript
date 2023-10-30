import { ListFunctionItemV1 } from './listFunctionItemV1';
import { PaginationOutput } from './paginationOutput';
export declare class ListFunctionsV1Output {
    'functions': Array<ListFunctionItemV1>;
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
