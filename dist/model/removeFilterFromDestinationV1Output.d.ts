export declare class RemoveFilterFromDestinationV1Output {
    'status': RemoveFilterFromDestinationV1Output.StatusEnum;
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
export declare namespace RemoveFilterFromDestinationV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
