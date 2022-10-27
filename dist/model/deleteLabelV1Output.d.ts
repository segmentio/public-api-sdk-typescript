export declare class DeleteLabelV1Output {
    'status': DeleteLabelV1Output.StatusEnum;
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
export declare namespace DeleteLabelV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
