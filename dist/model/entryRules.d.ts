import { ConcurrencyConfig } from './concurrencyConfig';
export declare class EntryRules {
    'type': EntryRules.TypeEnum;
    'concurrency'?: ConcurrencyConfig;
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
export declare namespace EntryRules {
    enum TypeEnum {
        MULTIPLE,
        ONCE,
        RE_ENTRY_AFTER_EXIT
    }
}
