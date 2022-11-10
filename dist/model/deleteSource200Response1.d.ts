import { DeleteSourceAlphaOutput } from './deleteSourceAlphaOutput';
export declare class DeleteSource200Response1 {
    'data'?: DeleteSourceAlphaOutput;
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
