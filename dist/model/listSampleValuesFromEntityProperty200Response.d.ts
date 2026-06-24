import { ListSampleValuesFromEntityPropertyAlphaOutput } from './listSampleValuesFromEntityPropertyAlphaOutput';
export declare class ListSampleValuesFromEntityProperty200Response {
    'data'?: ListSampleValuesFromEntityPropertyAlphaOutput;
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
