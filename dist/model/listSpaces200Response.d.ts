import { ListSpacesAlphaOutput } from './listSpacesAlphaOutput';
export declare class ListSpaces200Response {
    'data'?: ListSpacesAlphaOutput;
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
