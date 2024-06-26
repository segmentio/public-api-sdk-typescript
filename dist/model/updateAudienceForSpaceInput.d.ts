import { AudienceComputationDefinition } from './audienceComputationDefinition';
export declare class UpdateAudienceForSpaceInput {
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'definition'?: AudienceComputationDefinition;
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
