import { UpdateSchemaSettingsInSourceV1Output } from './updateSchemaSettingsInSourceV1Output';
export declare class UpdateSchemaSettingsInSource200Response {
    'data'?: UpdateSchemaSettingsInSourceV1Output;
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
