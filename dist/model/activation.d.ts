import { ActionDefinition } from './actionDefinition';
import { PropertySelectionsConfig } from './propertySelectionsConfig';
export declare class Activation {
    'id'?: string;
    'eventName': string;
    'actionDefinition': ActionDefinition;
    'propertySelections'?: PropertySelectionsConfig;
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
