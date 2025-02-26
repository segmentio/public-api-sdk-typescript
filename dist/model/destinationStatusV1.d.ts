export declare class DestinationStatusV1 {
    'name': string;
    'id': string;
    'status': DestinationStatusV1.StatusEnum;
    'errString': string;
    'finishedAt': string;
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
export declare namespace DestinationStatusV1 {
    enum StatusEnum {
        FAILED,
        FINISHED,
        INITIALIZED,
        INVALID,
        NOT_SUPPORTED,
        PARTIAL_SUCCESS,
        RUNNING
    }
}
