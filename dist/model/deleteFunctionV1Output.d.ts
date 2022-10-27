export declare class DeleteFunctionV1Output {
    'status': DeleteFunctionV1Output.StatusEnum;
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
export declare namespace DeleteFunctionV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
