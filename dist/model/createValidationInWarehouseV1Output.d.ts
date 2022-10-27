export declare class CreateValidationInWarehouseV1Output {
    'status': CreateValidationInWarehouseV1Output.StatusEnum;
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
export declare namespace CreateValidationInWarehouseV1Output {
    enum StatusEnum {
        CONNECTED,
        FAILED
    }
}
