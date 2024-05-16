import { AudienceOptions } from './audienceOptions';
import { Definition1 } from './definition1';
export declare class AudienceSummary {
    'id': string;
    'spaceId': string;
    'name': string;
    'description': string;
    'key': string;
    'enabled': boolean;
    'definition': Definition1 | null;
    'status'?: string;
    'createdBy': string;
    'updatedBy': string;
    'createdAt': string;
    'updatedAt': string;
    'options'?: AudienceOptions;
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
