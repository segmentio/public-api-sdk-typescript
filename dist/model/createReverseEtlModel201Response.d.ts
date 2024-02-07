import { CreateReverseEtlModelOutput } from './createReverseEtlModelOutput';
export declare class CreateReverseEtlModel201Response {
    'data'?: CreateReverseEtlModelOutput;
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
