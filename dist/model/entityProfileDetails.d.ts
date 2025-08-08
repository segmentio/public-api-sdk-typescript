import { Profile } from './profile';
export declare class EntityProfileDetails {
    'id': string;
    'idProperty': string;
    'relationshipSlug': string;
    'properties'?: {
        [key: string]: any;
    };
    'entities'?: {
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
