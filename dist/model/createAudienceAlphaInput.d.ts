import { AudienceDefinition } from './audienceDefinition';
import { AudienceOptions } from './audienceOptions';
export declare class CreateAudienceAlphaInput {
    'name': string;
    'enabled'?: boolean;
    'description'?: string;
    'definition': AudienceDefinition;
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
