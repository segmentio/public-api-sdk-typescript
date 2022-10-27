import { GetSpaceAlphaOutput } from './getSpaceAlphaOutput';
export declare class GetSpace200Response {
    'data'?: GetSpaceAlphaOutput;
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
