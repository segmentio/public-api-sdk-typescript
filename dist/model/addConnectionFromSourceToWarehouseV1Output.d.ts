export declare class AddConnectionFromSourceToWarehouseV1Output {
    'status': AddConnectionFromSourceToWarehouseV1Output.StatusEnum;
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
export declare namespace AddConnectionFromSourceToWarehouseV1Output {
    enum StatusEnum {
        CONNECTED,
        NOT_CONNECTED
    }
}
