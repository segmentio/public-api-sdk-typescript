import { CreateCloudSourceRegulationV1Output } from './createCloudSourceRegulationV1Output';
export declare class CreateCloudSourceRegulation200Response {
    'data'?: CreateCloudSourceRegulationV1Output;
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
