import { CreateFilterForSpaceOutput } from './createFilterForSpaceOutput';
export declare class CreateFilterForSpace200Response {
    'data'?: CreateFilterForSpaceOutput;
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
