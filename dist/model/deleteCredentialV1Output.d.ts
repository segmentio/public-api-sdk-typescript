export declare class DeleteCredentialV1Output {
    'status': DeleteCredentialV1Output.StatusEnum;
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
export declare namespace DeleteCredentialV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
