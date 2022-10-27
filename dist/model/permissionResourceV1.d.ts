import { AllowedLabelBeta } from './allowedLabelBeta';
export declare class PermissionResourceV1 {
    'id': string;
    'type': PermissionResourceV1.TypeEnum;
    'labels'?: Array<AllowedLabelBeta>;
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
export declare namespace PermissionResourceV1 {
    enum TypeEnum {
        FUNCTION,
        SOURCE,
        SPACE,
        WAREHOUSE,
        WORKSPACE
    }
}
