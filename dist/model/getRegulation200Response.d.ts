import { GetRegulationV1Output } from './getRegulationV1Output';
export declare class GetRegulation200Response {
    'data'?: GetRegulationV1Output;
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
