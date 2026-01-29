import { AudienceDefinitionWithoutTargetEntity } from './audienceDefinitionWithoutTargetEntity';
import { AudienceOptions } from './audienceOptions';
export declare class UpdateAudienceForSpaceInput {
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'definition'?: AudienceDefinitionWithoutTargetEntity;
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
