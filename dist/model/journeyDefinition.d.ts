import { EntryRules } from './entryRules';
import { ExitRulesConfig } from './exitRulesConfig';
import { JourneyState } from './journeyState';
export declare class JourneyDefinition {
    'initialState': string;
    'entryRules': EntryRules;
    'exitRules': ExitRulesConfig;
    'states': Array<JourneyState>;
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
