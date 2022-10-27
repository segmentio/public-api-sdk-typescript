import { RuleV1 } from './ruleV1';
export declare class ReplaceRulesInTrackingPlanV1Input {
    'rules'?: Array<RuleV1>;
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
