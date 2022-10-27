export declare class DestinationMetadataFeaturesV1 {
    'cloudModeInstances'?: DestinationMetadataFeaturesV1.CloudModeInstancesEnum;
    'deviceModeInstances'?: DestinationMetadataFeaturesV1.DeviceModeInstancesEnum;
    'replay'?: boolean;
    'browserUnbundling'?: boolean;
    'browserUnbundlingPublic'?: boolean;
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
export declare namespace DestinationMetadataFeaturesV1 {
    enum CloudModeInstancesEnum {
        _0,
        _1,
        MULTIPLE,
        NONE,
        SINGLE
    }
    enum DeviceModeInstancesEnum {
        _0,
        _1,
        NONE,
        SINGLE
    }
}
