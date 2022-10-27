import { CreateSourceRegulationV1Output } from './createSourceRegulationV1Output';
export declare class CreateSourceRegulation200Response {
    'data'?: CreateSourceRegulationV1Output;
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
