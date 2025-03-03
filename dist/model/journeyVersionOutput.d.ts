import { JourneyDefinition } from './journeyDefinition';
export declare class JourneyVersionOutput {
    'id': string;
    'version': number;
    'status': JourneyVersionOutput.StatusEnum;
    'definition': JourneyDefinition;
    'createdAt': string;
    'updatedAt'?: string;
    'createdBy': string;
    'updatedBy'?: string;
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
export declare namespace JourneyVersionOutput {
    enum StatusEnum {
        ARCHIVED,
        DRAFT,
        ENTRY_PAUSED,
        PUBLISHED
    }
}
