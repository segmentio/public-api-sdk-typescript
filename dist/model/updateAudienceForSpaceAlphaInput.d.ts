import { AudienceDefinition } from './audienceDefinition';
export declare class UpdateAudienceForSpaceAlphaInput {
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'definition'?: AudienceDefinition;
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
