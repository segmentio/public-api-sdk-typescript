import { Profile } from './profile';
export declare class AudiencePreviewResult {
    'id': string;
    'entities'?: {
        [key: string]: any;
    };
    'idProperty': string;
    'relationshipSlug': string;
    'properties'?: {
        [key: string]: any;
    };
    'profiles'?: Array<Profile>;
    'profilesTruncated': boolean;
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
