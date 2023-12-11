import { ReverseETLManualSyncJobOutput } from './reverseETLManualSyncJobOutput';
export declare class CreateReverseETLManualSyncOutput {
    'reverseETLManualSync': ReverseETLManualSyncJobOutput;
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
