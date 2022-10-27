import { Schedule } from './schedule';
export declare class GetAdvancedSyncScheduleFromWarehouseV1Output {
    'enabled': boolean;
    'schedule'?: Schedule;
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
