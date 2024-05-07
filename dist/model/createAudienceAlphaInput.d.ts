import { AudienceComputationDefinition } from './audienceComputationDefinition';
import { AudienceCreateOptions } from './audienceCreateOptions';
export declare class CreateAudienceAlphaInput {
    'name': string;
    'description': string;
    'definition': AudienceComputationDefinition;
    'options'?: AudienceCreateOptions;
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
