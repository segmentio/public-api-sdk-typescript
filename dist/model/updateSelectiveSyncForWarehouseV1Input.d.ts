import { WarehouseSyncOverrideV1 } from './warehouseSyncOverrideV1';
export declare class UpdateSelectiveSyncForWarehouseV1Input {
    'syncOverrides'?: Array<WarehouseSyncOverrideV1>;
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
