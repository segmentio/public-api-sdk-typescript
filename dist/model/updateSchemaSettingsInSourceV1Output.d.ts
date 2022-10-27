import { Settings1 } from './settings1';
export declare class UpdateSchemaSettingsInSourceV1Output {
    'sourceId': string;
    'settings': Settings1;
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
