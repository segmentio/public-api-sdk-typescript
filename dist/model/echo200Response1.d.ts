import { EchoAlphaOutput } from './echoAlphaOutput';
export declare class Echo200Response1 {
    'data'?: EchoAlphaOutput;
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
