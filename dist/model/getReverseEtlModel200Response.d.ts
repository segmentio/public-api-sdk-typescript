import { GetReverseEtlModelOutput } from './getReverseEtlModelOutput';
export declare class GetReverseEtlModel200Response {
    'data'?: GetReverseEtlModelOutput;
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
