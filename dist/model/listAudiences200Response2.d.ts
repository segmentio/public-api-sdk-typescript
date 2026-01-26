import { ListAudiencesAlphaOutput } from './listAudiencesAlphaOutput';
export declare class ListAudiences200Response2 {
    'data'?: ListAudiencesAlphaOutput;
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
