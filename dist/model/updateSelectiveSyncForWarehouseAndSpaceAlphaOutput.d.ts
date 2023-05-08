export declare class UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput {
    'status': UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum;
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
export declare namespace UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput {
    enum StatusEnum {
        UNCHANGED,
        UPDATED
    }
}
