import { UpsertRuleV1 } from './upsertRuleV1';
export declare class UpdateRulesInTrackingPlanV1Input {
    'rules': Array<UpsertRuleV1>;
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
