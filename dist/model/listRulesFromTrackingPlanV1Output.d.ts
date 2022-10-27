import { Pagination } from './pagination';
import { RuleV1 } from './ruleV1';
export declare class ListRulesFromTrackingPlanV1Output {
    'rules': Array<RuleV1>;
    'pagination': Pagination;
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
