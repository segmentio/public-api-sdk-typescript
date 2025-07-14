import { ListActivationsFromAudienceOutput } from './listActivationsFromAudienceOutput';
export declare class ListActivationsFromAudience200Response {
    'data'?: ListActivationsFromAudienceOutput;
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
