import { Schedule2 } from './schedule2';
export declare class ReplaceAdvancedSyncScheduleForWarehouseV1Output {
    'enabled': boolean;
    'schedule'?: Schedule2;
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
