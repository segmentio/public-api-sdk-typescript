import { Schedule1 } from './schedule1';
export declare class ReplaceAdvancedSyncScheduleForWarehouseV1Input {
    'enabled'?: boolean;
    'schedule'?: Schedule1;
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
