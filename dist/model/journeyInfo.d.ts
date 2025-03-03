import { JourneyVersionOutput } from './journeyVersionOutput';
export declare class JourneyInfo {
    'containerId': string;
    'name': string;
    'description': string;
    'createdAt': string;
    'updatedAt'?: string;
    'createdBy': string;
    'updatedBy'?: string;
    'version': JourneyVersionOutput;
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
