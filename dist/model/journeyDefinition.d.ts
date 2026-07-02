export declare class JourneyDefinition {
    'initial': string;
    'states': {
        [key: string]: any;
    };
    'entryRules'?: {
        [key: string]: any;
    };
    'exitRules'?: {
        [key: string]: any;
    };
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
