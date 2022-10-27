import { GetAdvancedSyncScheduleFromWarehouseV1Output } from './getAdvancedSyncScheduleFromWarehouseV1Output';
export declare class GetAdvancedSyncScheduleFromWarehouse200Response {
    'data'?: GetAdvancedSyncScheduleFromWarehouseV1Output;
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
