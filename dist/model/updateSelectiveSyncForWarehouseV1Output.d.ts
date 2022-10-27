export declare class UpdateSelectiveSyncForWarehouseV1Output {
    'status': UpdateSelectiveSyncForWarehouseV1Output.StatusEnum;
    'warnings': Array<string>;
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
export declare namespace UpdateSelectiveSyncForWarehouseV1Output {
    enum StatusEnum {
        UNCHANGED,
        UPDATED
    }
}
