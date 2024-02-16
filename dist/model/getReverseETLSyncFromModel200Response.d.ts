import { GetReverseETLSyncFromModelOutput } from './getReverseETLSyncFromModelOutput';
export declare class GetReverseETLSyncFromModel200Response {
    'data'?: GetReverseETLSyncFromModelOutput;
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
