export declare class EchoAlphaOutput {
    'method': EchoAlphaOutput.MethodEnum;
    'message': string;
    'headers': {
        [key: string]: any;
    };
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
export declare namespace EchoAlphaOutput {
    enum MethodEnum {
        get,
        post
    }
}
