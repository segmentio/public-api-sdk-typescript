import { CreateSourceAlphaOutput } from './createSourceAlphaOutput';
export declare class CreateSource200Response1 {
    'data'?: CreateSourceAlphaOutput;
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
