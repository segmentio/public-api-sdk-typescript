import { EventAlpha } from './eventAlpha';
import { PaginationOutput } from './paginationOutput';
export declare class ListEventsAlphaOutput {
    'events': Array<EventAlpha>;
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
