export declare class DeleteInsertFunctionInstanceAlphaOutput {
    'status': DeleteInsertFunctionInstanceAlphaOutput.StatusEnum;
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
export declare namespace DeleteInsertFunctionInstanceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
