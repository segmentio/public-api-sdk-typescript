import { AdvancedWarehouseSyncScheduleV1Output } from './advancedWarehouseSyncScheduleV1Output';
export declare class ReplaceAdvancedSyncScheduleForWarehouseV1Output {
    'enabled': boolean;
    'schedule'?: AdvancedWarehouseSyncScheduleV1Output;
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
