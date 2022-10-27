import { ListAuditEventsV1Output } from './listAuditEventsV1Output';
export declare class ListAuditEvents200Response {
    'data'?: ListAuditEventsV1Output;
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
