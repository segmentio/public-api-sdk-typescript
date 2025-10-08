export declare class DeleteEdgeFunctionCodeAlphaOutput {
    'status': DeleteEdgeFunctionCodeAlphaOutput.StatusEnum;
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
export declare namespace DeleteEdgeFunctionCodeAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
