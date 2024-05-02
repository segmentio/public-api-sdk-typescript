import { TraitCreateOptions } from './traitCreateOptions';
import { TraitDefinition } from './traitDefinition';
export declare class CreateComputedTraitAlphaInput {
    'name': string;
    'description': string;
    'definition': TraitDefinition;
    'options'?: TraitCreateOptions;
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
