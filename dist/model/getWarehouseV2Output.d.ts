import { WarehouseV2 } from './warehouseV2';
export declare class GetWarehouseV2Output {
    'warehouse': WarehouseV2;
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
