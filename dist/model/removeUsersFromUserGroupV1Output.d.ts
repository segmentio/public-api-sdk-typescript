export declare class RemoveUsersFromUserGroupV1Output {
    'status': RemoveUsersFromUserGroupV1Output.StatusEnum;
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
export declare namespace RemoveUsersFromUserGroupV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
