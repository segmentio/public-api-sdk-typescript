export declare class DeleteTransformationBetaOutput {
    'status': DeleteTransformationBetaOutput.StatusEnum;
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
export declare namespace DeleteTransformationBetaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
