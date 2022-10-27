import { Pagination } from './pagination';
import { TransformationBeta } from './transformationBeta';
export declare class ListTransformationsBetaOutput {
    'transformations': Array<TransformationBeta>;
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
