import { WarehouseV1 } from './warehouseV1';
export declare class GetWarehouseV1Output {
    'warehouse': WarehouseV1;
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
