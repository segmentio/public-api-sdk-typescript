import { FunctionSettingV1 } from './functionSettingV1';
export declare class UpdateFunctionV1Input {
    'code'?: string;
    'settings'?: Array<FunctionSettingV1>;
    'displayName'?: string;
    'logoUrl'?: string;
    'description'?: string;
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
