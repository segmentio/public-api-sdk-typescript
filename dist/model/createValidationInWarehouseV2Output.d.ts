export declare class CreateValidationInWarehouseV2Output {
    'status': CreateValidationInWarehouseV2Output.StatusEnum;
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
export declare namespace CreateValidationInWarehouseV2Output {
    enum StatusEnum {
        CONNECTED,
        FAILED
    }
}
