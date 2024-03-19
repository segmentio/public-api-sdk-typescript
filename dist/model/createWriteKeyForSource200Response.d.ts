import { CreateWriteKeyForSourceAlphaOutput } from './createWriteKeyForSourceAlphaOutput';
export declare class CreateWriteKeyForSource200Response {
    'data'?: CreateWriteKeyForSourceAlphaOutput;
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
