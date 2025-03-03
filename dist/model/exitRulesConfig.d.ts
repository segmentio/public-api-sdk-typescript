import { StatesInner } from './statesInner';
export declare class ExitRulesConfig {
    'enabled': boolean;
    'states': Array<StatesInner>;
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
