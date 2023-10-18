import { ListInsertFunctionInstancesAlphaOutput } from './listInsertFunctionInstancesAlphaOutput';
export declare class ListInsertFunctionInstances200Response {
    'data'?: ListInsertFunctionInstancesAlphaOutput;
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
