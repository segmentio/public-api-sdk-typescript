import { EntityDetails } from './entityDetails';
export declare class AudiencePreviewResult {
    'id': string;
    'entities'?: {
        [key: string]: Array<EntityDetails>;
    };
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
