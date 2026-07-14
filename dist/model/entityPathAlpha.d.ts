export declare class EntityPathAlpha {
    'id': string;
    'entityName': string;
    'pathName': string;
    'entitySlug': string;
    'relationshipSlugs': Array<string>;
    'childRelationshipSlugs': Array<string>;
    'parentRelationshipSlugPath': string;
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
