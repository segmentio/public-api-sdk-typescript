import { AudienceComputeCadence } from './audienceComputeCadence';
import { AudienceDefinition } from './audienceDefinition';
import { AudienceOptionsWithLookback } from './audienceOptionsWithLookback';
import { AudienceSchedule } from './audienceSchedule';
import { AudienceSize } from './audienceSize';
export declare class AudienceSummaryWithAudienceTypeAndLookback {
    'audienceType': AudienceSummaryWithAudienceTypeAndLookback.AudienceTypeEnum;
    'computeCadence': AudienceComputeCadence;
    'size'?: AudienceSize;
    'options'?: AudienceOptionsWithLookback;
    'schedules'?: Array<AudienceSchedule>;
    'id': string;
    'spaceId': string;
    'name': string;
    'description'?: string;
    'key': string;
    'enabled': boolean;
    'definition': AudienceDefinition | null;
    'status'?: string;
    'createdBy': string;
    'updatedBy': string;
    'createdAt': string;
    'updatedAt': string;
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
export declare namespace AudienceSummaryWithAudienceTypeAndLookback {
    enum AudienceTypeEnum {
        ACCOUNTS,
        LINKED,
        USERS
    }
}
