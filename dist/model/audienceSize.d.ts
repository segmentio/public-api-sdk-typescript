export declare class AudienceSize {
    'count': number;
    'type': AudienceSize.TypeEnum;
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
export declare namespace AudienceSize {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}
