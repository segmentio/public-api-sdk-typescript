import { SpaceWarehouseSchemaOverride } from './spaceWarehouseSchemaOverride';
export declare class UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput {
    'syncOverrides'?: Array<SpaceWarehouseSchemaOverride>;
    'enableEventTables'?: boolean;
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
