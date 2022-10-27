import { PropertyRenameBeta } from './propertyRenameBeta';
export declare class CreateTransformationBetaInput {
    'name': string;
    'sourceId': string;
    'destinationMetadataId'?: string;
    'enabled': boolean;
    'if': string;
    'newEventName'?: string;
    'propertyRenames'?: Array<PropertyRenameBeta>;
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
