export declare class DeleteTransformationFunctionInstanceAlphaOutput {
    'status': DeleteTransformationFunctionInstanceAlphaOutput.StatusEnum;
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
export declare namespace DeleteTransformationFunctionInstanceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
