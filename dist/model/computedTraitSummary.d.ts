import { Definition } from './definition';
import { TraitOptions } from './traitOptions';
export declare class ComputedTraitSummary {
    'id': string;
    'spaceId': string;
    'name': string;
    'description'?: string;
    'key': string;
    'enabled': boolean;
    'definition': Definition | null;
    'status'?: string;
    'createdBy': string;
    'updatedBy': string;
    'createdAt': string;
    'updatedAt': string;
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
