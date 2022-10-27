import { ListSchemaSettingsInSourceV1Output } from './listSchemaSettingsInSourceV1Output';
export declare class ListSchemaSettingsInSource200Response {
    'data'?: ListSchemaSettingsInSourceV1Output;
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
