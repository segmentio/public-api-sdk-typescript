export declare class FunctionDeployment {
    'status': FunctionDeployment.StatusEnum;
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
export declare namespace FunctionDeployment {
    enum StatusEnum {
        SUCCESS
    }
}
