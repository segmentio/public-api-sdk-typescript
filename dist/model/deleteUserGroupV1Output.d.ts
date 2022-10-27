export declare class DeleteUserGroupV1Output {
    'status': DeleteUserGroupV1Output.StatusEnum;
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
export declare namespace DeleteUserGroupV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
