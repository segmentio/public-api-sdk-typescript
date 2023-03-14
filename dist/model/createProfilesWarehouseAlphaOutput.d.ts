import { ProfilesWarehouse } from './profilesWarehouse';
export declare class CreateProfilesWarehouseAlphaOutput {
    'profilesWarehouse': ProfilesWarehouse;
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
