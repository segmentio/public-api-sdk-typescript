export declare class GetSubscriptionRequest {
    'key': string;
    'type': GetSubscriptionRequest.TypeEnum;
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
export declare namespace GetSubscriptionRequest {
    enum TypeEnum {
        EMAIL,
        SMS,
        WHATSAPP
    }
}
