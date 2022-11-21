import { Pagination } from './pagination';
import { TransformationV1 } from './transformationV1';
export declare class ListTransformationsV1Output {
    'transformations': Array<TransformationV1>;
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
