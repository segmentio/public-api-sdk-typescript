import { CreateReverseETLManualSyncOutput } from './createReverseETLManualSyncOutput';
export declare class CreateReverseETLManualSync200Response {
    'data'?: CreateReverseETLManualSyncOutput;
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
