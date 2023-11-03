import { SourceAlpha } from './sourceAlpha';
export declare class GetSourceAlphaOutput {
    'source': SourceAlpha;
    'trackingPlanId': string | null;
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
