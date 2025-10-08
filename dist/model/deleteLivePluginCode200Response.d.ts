import { DeleteLivePluginCodeAlphaOutput } from './deleteLivePluginCodeAlphaOutput';
export declare class DeleteLivePluginCode200Response {
    'data'?: DeleteLivePluginCodeAlphaOutput;
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
