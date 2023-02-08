import { UpdateReverseEtlModelOutput } from './updateReverseEtlModelOutput';
export declare class UpdateReverseEtlModel200Response {
    'data'?: UpdateReverseEtlModelOutput;
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
