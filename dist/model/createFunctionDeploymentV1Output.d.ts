import { FunctionDeployment } from './functionDeployment';
export declare class CreateFunctionDeploymentV1Output {
    'functionDeployment': FunctionDeployment;
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
