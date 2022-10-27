import { DeleteRegulationV1Output } from './deleteRegulationV1Output';
export declare class DeleteRegulation200Response {
    'data'?: DeleteRegulationV1Output;
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
