import { ProfilesWarehouse1 } from './profilesWarehouse1';
export declare class UpdateProfilesWarehouseForSpaceWarehouseAlphaOutput {
    'profilesWarehouse': ProfilesWarehouse1;
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
