export declare class RemoveWriteKeyFromSourceAlphaOutput {
    'status': RemoveWriteKeyFromSourceAlphaOutput.StatusEnum;
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
export declare namespace RemoveWriteKeyFromSourceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
