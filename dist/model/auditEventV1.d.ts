export declare class AuditEventV1 {
    'id': string;
    'timestamp': string;
    'type': string;
    'actor': string;
    'actorEmail'?: string;
    'resourceId': string;
    'resourceType': string;
    'resourceName': string;
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
