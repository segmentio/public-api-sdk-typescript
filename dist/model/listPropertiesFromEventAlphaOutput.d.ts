import { EventPropertyAlpha } from './eventPropertyAlpha';
import { PaginationOutput } from './paginationOutput';
export declare class ListPropertiesFromEventAlphaOutput {
    'eventProperties': Array<EventPropertyAlpha>;
    'pagination': PaginationOutput;
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
