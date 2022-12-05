import { PropertyRenameV1 } from './propertyRenameV1';
import { PropertyValueTransformationV1 } from './propertyValueTransformationV1';
export declare class Transformation3 {
    'id': string;
    'name': string;
    'sourceId': string;
    'destinationMetadataId'?: string;
    'enabled': boolean;
    'if': string;
    'newEventName'?: string;
    'propertyRenames'?: Array<PropertyRenameV1>;
    'propertyValueTransformations'?: Array<PropertyValueTransformationV1>;
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
