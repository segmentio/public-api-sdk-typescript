import { PersonalizationInputEntity } from './personalizationInputEntity';
import { Profile } from './profile';
export declare class PersonalizationInput {
    'profile': Profile;
    'entities'?: Array<PersonalizationInputEntity>;
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
