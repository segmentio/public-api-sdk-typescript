export declare class GetConnectionStateFromWarehouseV1Output {
    'connectionState': GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum;
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
export declare namespace GetConnectionStateFromWarehouseV1Output {
    enum ConnectionStateEnum {
        CONNECTED,
        FAILED
    }
}
