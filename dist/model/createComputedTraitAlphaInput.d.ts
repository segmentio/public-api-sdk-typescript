import { TraitDefinition } from './traitDefinition';
import { TraitOptions } from './traitOptions';
export declare class CreateComputedTraitAlphaInput {
    'name': string;
    'description': string;
    'definition': TraitDefinition;
    'options'?: TraitOptions;
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
