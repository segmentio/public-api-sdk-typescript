export declare class ComputedTrait {
    'id': string;
    'spaceId': string;
    'name': string;
    'description': string;
    'key': string;
    'enabled': boolean;
    'createdBy': string;
    'updatedBy': string;
    'createdAt': string;
    'updatedAt': string;
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
