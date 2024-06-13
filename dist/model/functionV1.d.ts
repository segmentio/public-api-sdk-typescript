import { FunctionSettingV1 } from './functionSettingV1';
export declare class FunctionV1 {
    'id'?: string;
    'resourceType'?: FunctionV1.ResourceTypeEnum;
    'createdAt'?: string;
    'createdBy'?: string;
    'code'?: string;
    'deployedAt'?: string | null;
    'settings'?: Array<FunctionSettingV1>;
    'displayName'?: string;
    'description'?: string;
    'logoUrl'?: string;
    'previewWebhookUrl'?: string;
    'batchMaxCount'?: number;
    'catalogId'?: string;
    'isLatestVersion'?: boolean;
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
export declare namespace FunctionV1 {
    enum ResourceTypeEnum {
        DESTINATION,
        INSERT_DESTINATION,
        INSERT_SOURCE,
        SOURCE
    }
}
