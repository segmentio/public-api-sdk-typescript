import { DeleteSourceV1Output } from './deleteSourceV1Output';
export declare class DeleteSource200Response1 {
    'data'?: DeleteSourceV1Output;
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
