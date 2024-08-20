import { FunctionV1 } from './functionV1';
export declare class GetFunctionV1Output {
    'function': FunctionV1 | null;
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
