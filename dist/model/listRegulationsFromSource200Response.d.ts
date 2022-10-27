import { ListRegulationsFromSourceV1Output } from './listRegulationsFromSourceV1Output';
export declare class ListRegulationsFromSource200Response {
    'data'?: ListRegulationsFromSourceV1Output;
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
