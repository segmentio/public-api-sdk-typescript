export declare class RequestError {
    'type': string;
    'message'?: string;
    'field'?: string;
    'data'?: any | null;
    'status'?: number;
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
