export declare class DeleteLivePluginCodeAlphaOutput {
    'status': DeleteLivePluginCodeAlphaOutput.StatusEnum;
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
export declare namespace DeleteLivePluginCodeAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}
