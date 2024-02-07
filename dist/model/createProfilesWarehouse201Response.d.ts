import { CreateProfilesWarehouseAlphaOutput } from './createProfilesWarehouseAlphaOutput';
export declare class CreateProfilesWarehouse201Response {
    'data'?: CreateProfilesWarehouseAlphaOutput;
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
