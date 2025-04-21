import { ListAudiencesBetaOutput } from './listAudiencesBetaOutput';
export declare class ListAudiences200Response {
    'data'?: ListAudiencesBetaOutput;
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
