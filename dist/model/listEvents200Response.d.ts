import { ListEventsAlphaOutput } from './listEventsAlphaOutput';
export declare class ListEvents200Response {
    'data'?: ListEventsAlphaOutput;
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
