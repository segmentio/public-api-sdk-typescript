import { CreateFunctionDeploymentV1Output } from './createFunctionDeploymentV1Output';
export declare class CreateFunctionDeployment200Response {
    'data'?: CreateFunctionDeploymentV1Output;
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
