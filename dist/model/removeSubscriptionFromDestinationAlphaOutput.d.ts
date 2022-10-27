export declare class RemoveSubscriptionFromDestinationAlphaOutput {
    'status': RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum;
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
export declare namespace RemoveSubscriptionFromDestinationAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
