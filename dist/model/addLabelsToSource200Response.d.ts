import { AddLabelsToSourceV1Output } from './addLabelsToSourceV1Output';
export declare class AddLabelsToSource200Response {
    'data'?: AddLabelsToSourceV1Output;
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
