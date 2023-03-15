export declare class RemoveProfilesWarehouseFromSpaceAlphaOutput {
    'status': RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum;
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
export declare namespace RemoveProfilesWarehouseFromSpaceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
