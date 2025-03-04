import { ExitDestinationState } from './exitDestinationState';
import { RulesInner } from './rulesInner';
export declare class ExitRulesConfig {
    'enabled': boolean;
    'rules': Array<RulesInner>;
    'relatedDestinations'?: Array<ExitDestinationState>;
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
