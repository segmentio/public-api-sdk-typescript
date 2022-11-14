import { GetSourceAlphaOutput } from './getSourceAlphaOutput';
export declare class GetSource200Response1 {
    'data'?: GetSourceAlphaOutput;
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
