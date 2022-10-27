export declare class DestinationMetadataComponentV1 {
    'type': DestinationMetadataComponentV1.TypeEnum;
    'code': string;
    'owner'?: DestinationMetadataComponentV1.OwnerEnum;
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
export declare namespace DestinationMetadataComponentV1 {
    enum TypeEnum {
        ANDROID,
        BROWSER,
        IOS,
        SERVER
    }
    enum OwnerEnum {
        PARTNER,
        SEGMENT
    }
}
