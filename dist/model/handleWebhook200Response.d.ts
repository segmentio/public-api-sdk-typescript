import { HandleWebhookOutput } from './handleWebhookOutput';
export declare class HandleWebhook200Response {
    'data'?: HandleWebhookOutput;
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
