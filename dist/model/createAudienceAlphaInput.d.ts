import { AudienceComputationDefinition } from './audienceComputationDefinition';
import { AudienceOptions } from './audienceOptions';
export declare class CreateAudienceAlphaInput {
    'name': string;
    'description': string;
    'definition': AudienceComputationDefinition;
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
