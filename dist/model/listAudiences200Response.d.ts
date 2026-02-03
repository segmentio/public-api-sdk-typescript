import { ListAudiencesOutput } from './listAudiencesOutput';
export declare class ListAudiences200Response {
    'data'?: ListAudiencesOutput;
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
