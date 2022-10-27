export declare class DeleteUsersV1Output {
    'status': DeleteUsersV1Output.StatusEnum;
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
export declare namespace DeleteUsersV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
