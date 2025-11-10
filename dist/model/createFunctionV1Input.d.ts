import { FunctionSettingV1 } from './functionSettingV1';
export declare class CreateFunctionV1Input {
    'code': string;
    'settings'?: Array<FunctionSettingV1>;
    'displayName': string;
    'logoUrl'?: string;
    'resourceType': CreateFunctionV1Input.ResourceTypeEnum;
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
export declare namespace CreateFunctionV1Input {
    enum ResourceTypeEnum {
        DESTINATION,
        INSERT_DESTINATION,
        INSERT_SOURCE,
        INSERT_TRANSFORMATION,
        SOURCE
    }
}
