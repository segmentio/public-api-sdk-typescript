import { TraitDefinition } from './traitDefinition';
export declare class UpdateComputedTraitForSpaceAlphaInput {
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'definition'?: TraitDefinition;
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
