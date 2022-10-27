import { GetEventsVolumeFromWorkspaceV1Output } from './getEventsVolumeFromWorkspaceV1Output';
export declare class GetEventsVolumeFromWorkspace200Response {
    'data'?: GetEventsVolumeFromWorkspaceV1Output;
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
