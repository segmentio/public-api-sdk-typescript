import { PaginationOutput } from './paginationOutput';
import { RuleV1 } from './ruleV1';
export declare class ListRulesFromTrackingPlanV1Output {
    'rules': Array<RuleV1>;
    'pagination': PaginationOutput;
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
