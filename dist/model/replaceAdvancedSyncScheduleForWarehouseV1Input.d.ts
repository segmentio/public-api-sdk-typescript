import { AdvancedWarehouseSyncScheduleV1Input } from './advancedWarehouseSyncScheduleV1Input';
export declare class ReplaceAdvancedSyncScheduleForWarehouseV1Input {
    'enabled': boolean;
    'schedule'?: AdvancedWarehouseSyncScheduleV1Input;
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
