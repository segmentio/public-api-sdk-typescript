export declare class DeleteDestinationV1Output {
    'status': DeleteDestinationV1Output.StatusEnum;
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
export declare namespace DeleteDestinationV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
