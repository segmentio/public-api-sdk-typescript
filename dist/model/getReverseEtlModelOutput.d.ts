import { ReverseEtlModel1 } from './reverseEtlModel1';
export declare class GetReverseEtlModelOutput {
    'reverseEtlModel': ReverseEtlModel1;
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
