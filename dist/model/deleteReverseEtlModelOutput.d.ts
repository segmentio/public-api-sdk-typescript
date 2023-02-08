export declare class DeleteReverseEtlModelOutput {
    'status': DeleteReverseEtlModelOutput.StatusEnum;
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
export declare namespace DeleteReverseEtlModelOutput {
    enum StatusEnum {
        SUCCESS
    }
}
