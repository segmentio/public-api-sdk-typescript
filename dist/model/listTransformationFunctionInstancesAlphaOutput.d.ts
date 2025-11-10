import { PaginationOutput } from './paginationOutput';
import { TransformationFunctionInstanceAlpha } from './transformationFunctionInstanceAlpha';
export declare class ListTransformationFunctionInstancesAlphaOutput {
    'instances': Array<TransformationFunctionInstanceAlpha>;
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
