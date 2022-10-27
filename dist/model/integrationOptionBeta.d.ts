export declare class IntegrationOptionBeta {
    'name': string;
    'type': string;
    'required': boolean;
    'description'?: string;
    'defaultValue'?: any | null;
    'label'?: string;
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
