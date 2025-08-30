import { CreateAudienceBetaOutput } from './createAudienceBetaOutput';
export declare class CreateAudience200Response {
    'data'?: CreateAudienceBetaOutput;
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
