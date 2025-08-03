import { AudienceEcho } from './audienceEcho';
export declare class GetAudienceEchoAlphaOutput {
    'audienceEcho': AudienceEcho;
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
