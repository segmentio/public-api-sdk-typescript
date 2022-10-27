import { Settings } from './settings';
export declare class ListSchemaSettingsInSourceV1Output {
    'sourceId': string;
    'settings': Settings;
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
