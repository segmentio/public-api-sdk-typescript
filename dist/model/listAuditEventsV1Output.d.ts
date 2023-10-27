import { AuditEventV1 } from './auditEventV1';
import { PaginationOutput } from './paginationOutput';
export declare class ListAuditEventsV1Output {
    'events': Array<AuditEventV1>;
    'pagination'?: PaginationOutput;
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
