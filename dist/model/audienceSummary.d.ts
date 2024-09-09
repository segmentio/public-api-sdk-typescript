import { AudienceDefinition } from './audienceDefinition';
import { AudienceOptions } from './audienceOptions';
export declare class AudienceSummary {
    'id': string;
    'spaceId': string;
    'name': string;
    'description'?: string;
    'key': string;
    'enabled': boolean;
    'definition': AudienceDefinition | null;
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
