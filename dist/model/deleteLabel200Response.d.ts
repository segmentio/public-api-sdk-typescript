import { DeleteLabelV1Output } from './deleteLabelV1Output';
export declare class DeleteLabel200Response {
    'data'?: DeleteLabelV1Output;
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
