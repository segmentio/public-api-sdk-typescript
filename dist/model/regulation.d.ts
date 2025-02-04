import { StreamStatusV1 } from './streamStatusV1';
export declare class Regulation {
    'id': string;
    'workspaceId': string;
    'overallStatus': Regulation.OverallStatusEnum;
    'finishedAt'?: string;
    'createdAt': string;
    'streamStatus': Array<StreamStatusV1>;
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
export declare namespace Regulation {
    enum OverallStatusEnum {
        FAILED,
        FINISHED,
        INITIALIZED,
        INVALID,
        IN_PROGRESS,
        NOT_SUPPORTED,
        PARTIAL_SUCCESS
    }
}
