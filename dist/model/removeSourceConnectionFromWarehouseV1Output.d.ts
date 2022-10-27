export declare class RemoveSourceConnectionFromWarehouseV1Output {
    'status': RemoveSourceConnectionFromWarehouseV1Output.StatusEnum;
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
export declare namespace RemoveSourceConnectionFromWarehouseV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
