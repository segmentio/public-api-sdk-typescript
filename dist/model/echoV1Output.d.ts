export declare class EchoV1Output {
    'method': EchoV1Output.MethodEnum;
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
export declare namespace EchoV1Output {
    enum MethodEnum {
        get,
        post
    }
}
