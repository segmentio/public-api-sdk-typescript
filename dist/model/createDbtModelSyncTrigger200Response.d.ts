import { CreateDbtModelSyncTriggerOutput } from './createDbtModelSyncTriggerOutput';
export declare class CreateDbtModelSyncTrigger200Response {
    'data'?: CreateDbtModelSyncTriggerOutput;
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
