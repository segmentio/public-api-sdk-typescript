import { Pagination } from './pagination';
import { ReverseEtlModel } from './reverseEtlModel';
export declare class ListReverseEtlModelsOutput {
    'models': Array<ReverseEtlModel>;
    'pagination': Pagination;
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
