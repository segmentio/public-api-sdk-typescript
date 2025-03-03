export declare class ActionDefinition {
    'id'?: string;
    'useDefaultMappings'?: boolean;
    'mappings': {
        [key: string]: any;
    };
    'actionId': string;
    'enabled'?: boolean;
    'name'?: string;
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
