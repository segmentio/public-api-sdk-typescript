import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
import { AudiencePreviewResult } from './audiencePreviewResult';
import { AudienceSize } from './audienceSize';
export declare class AudiencePreviewAnyOf {
    'status': AudiencePreviewAnyOf.StatusEnum;
    'results': Array<AudiencePreviewResult>;
    'size': AudienceSize;
    'id': string;
    'audienceType': AudiencePreviewAnyOf.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': AudiencePreviewOptions;
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
export declare namespace AudiencePreviewAnyOf {
    enum StatusEnum {
        COMPLETED
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}
