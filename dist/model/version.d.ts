export declare class Version {
    'id': string;
    'author'?: string;
    'code': string;
    'isDeployed'?: boolean;
    'createdAt'?: string;
    'updatedAt'?: string;
    'deployedAt'?: string;
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
