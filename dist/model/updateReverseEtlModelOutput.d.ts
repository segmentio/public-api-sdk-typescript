import { ReverseEtlModel } from './reverseEtlModel';
export declare class UpdateReverseEtlModelOutput {
    'reverseEtlModel': ReverseEtlModel;
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
