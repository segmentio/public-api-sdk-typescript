import { ListProfilesWarehouseInSpaceAlphaOutput } from './listProfilesWarehouseInSpaceAlphaOutput';
export declare class ListProfilesWarehouseInSpace200Response {
    'data'?: ListProfilesWarehouseInSpaceAlphaOutput;
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
