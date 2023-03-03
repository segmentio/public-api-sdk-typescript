export declare class HandleWebhookOutput {
    'status': HandleWebhookOutput.StatusEnum;
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
export declare namespace HandleWebhookOutput {
    enum StatusEnum {
        SUCCESS
    }
}
