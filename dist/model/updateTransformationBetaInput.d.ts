import { PropertyRenameBeta } from './propertyRenameBeta';
import { PropertyValueTransformationBeta } from './propertyValueTransformationBeta';
export declare class UpdateTransformationBetaInput {
    'transformationId': string;
    'name'?: string;
    'sourceId'?: string;
    'destinationMetadataId'?: string;
    'enabled'?: boolean;
    'if'?: string;
    'newEventName'?: string;
    'propertyRenames'?: Array<PropertyRenameBeta>;
    'propertyValueTransformations'?: Array<PropertyValueTransformationBeta>;
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
