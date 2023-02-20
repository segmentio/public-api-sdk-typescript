import { DeleteReverseEtlModelOutput } from './deleteReverseEtlModelOutput';
export declare class DeleteReverseEtlModel200Response {
    'data'?: DeleteReverseEtlModelOutput;
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
