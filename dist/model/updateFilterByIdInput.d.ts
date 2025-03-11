export declare class UpdateFilterByIdInput {
    'integrationId': string;
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'if'?: string;
    'drop'?: boolean;
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
