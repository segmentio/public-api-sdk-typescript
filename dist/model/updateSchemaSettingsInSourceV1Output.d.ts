import { SourceSettingsOutputV1 } from './sourceSettingsOutputV1';
export declare class UpdateSchemaSettingsInSourceV1Output {
    'sourceId': string;
    'settings': SourceSettingsOutputV1;
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
