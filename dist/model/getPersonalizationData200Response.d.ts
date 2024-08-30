import { GetPersonalizationDataOutput } from './getPersonalizationDataOutput';
export declare class GetPersonalizationData200Response {
    'data'?: GetPersonalizationDataOutput;
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
