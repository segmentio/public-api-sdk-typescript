import { UpdateFilterByIdOutput } from './updateFilterByIdOutput';
export declare class UpdateFilterById200Response {
    'data'?: UpdateFilterByIdOutput;
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
