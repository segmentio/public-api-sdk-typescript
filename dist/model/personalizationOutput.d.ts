import { PersonalizationInputEntity } from './personalizationInputEntity';
import { Profile1 } from './profile1';
export declare class PersonalizationOutput {
    'profile': Profile1;
    'entities'?: Array<PersonalizationInputEntity>;
    'syncEntityPropertyChanges'?: boolean;
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
