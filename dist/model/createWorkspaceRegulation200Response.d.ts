import { CreateWorkspaceRegulationV1Output } from './createWorkspaceRegulationV1Output';
export declare class CreateWorkspaceRegulation200Response {
    'data'?: CreateWorkspaceRegulationV1Output;
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
