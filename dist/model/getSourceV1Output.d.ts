import { SourceV1 } from './sourceV1';
export declare class GetSourceV1Output {
    'source': SourceV1;
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
