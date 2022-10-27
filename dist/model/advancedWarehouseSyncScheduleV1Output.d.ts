import { WarehouseAdvancedSyncV1 } from './warehouseAdvancedSyncV1';
export declare class AdvancedWarehouseSyncScheduleV1Output {
    'times'?: Array<WarehouseAdvancedSyncV1>;
    'timezone'?: string;
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
