export declare class DeleteWarehouseV1Output {
    'status': DeleteWarehouseV1Output.StatusEnum;
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
export declare namespace DeleteWarehouseV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
