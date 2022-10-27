import { FunctionSettingV1 } from './functionSettingV1';
export declare class Function2 {
    'id'?: string;
    'resourceType'?: Function2.ResourceTypeEnum;
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
export declare namespace Function2 {
    enum ResourceTypeEnum {
        DESTINATION,
        SOURCE
    }
}
