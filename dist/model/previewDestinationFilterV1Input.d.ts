import { PreviewDestinationFilterV1 } from './previewDestinationFilterV1';
export declare class PreviewDestinationFilterV1Input {
    'filter': PreviewDestinationFilterV1;
    'payload': {
        [key: string]: any;
    };
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
