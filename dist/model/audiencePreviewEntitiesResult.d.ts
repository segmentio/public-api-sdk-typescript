import { EntityProfileDetails } from './entityProfileDetails';
export declare class AudiencePreviewEntitiesResult {
    'entities'?: {
        [key: string]: Array<EntityProfileDetails>;
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
