import { RuleInputV1 } from './ruleInputV1';
export declare class ReplaceRulesInTrackingPlanV1Input {
    'rules': Array<RuleInputV1>;
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
