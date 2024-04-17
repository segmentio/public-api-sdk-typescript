import { GetReverseETLSyncStatusOutput } from './getReverseETLSyncStatusOutput';
export declare class GetReverseETLSyncStatus200Response {
    'data'?: GetReverseETLSyncStatusOutput;
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
