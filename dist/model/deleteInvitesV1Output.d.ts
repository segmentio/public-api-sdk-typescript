export declare class DeleteInvitesV1Output {
    'status': DeleteInvitesV1Output.StatusEnum;
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
export declare namespace DeleteInvitesV1Output {
    enum StatusEnum {
        SUCCESS
    }
}
