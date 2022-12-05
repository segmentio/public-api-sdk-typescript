export declare class DeleteTransformationV1Output {
    'status': DeleteTransformationV1Output.StatusEnum;
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
export declare namespace DeleteTransformationV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
