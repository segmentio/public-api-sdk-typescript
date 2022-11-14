import { ListLabelsV1Output } from './listLabelsV1Output';
export declare class ListLabels200Response {
    'data'?: ListLabelsV1Output;
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
