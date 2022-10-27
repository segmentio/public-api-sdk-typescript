"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataFeaturesV1 = void 0;
var DestinationMetadataFeaturesV1 = (function () {
    function DestinationMetadataFeaturesV1() {
    }
    DestinationMetadataFeaturesV1.getAttributeTypeMap = function () {
        return DestinationMetadataFeaturesV1.attributeTypeMap;
    };
    DestinationMetadataFeaturesV1.discriminator = undefined;
    DestinationMetadataFeaturesV1.attributeTypeMap = [
        {
            name: 'cloudModeInstances',
            baseName: 'cloudModeInstances',
            type: 'DestinationMetadataFeaturesV1.CloudModeInstancesEnum',
        },
        {
            name: 'deviceModeInstances',
            baseName: 'deviceModeInstances',
            type: 'DestinationMetadataFeaturesV1.DeviceModeInstancesEnum',
        },
        {
            name: 'replay',
            baseName: 'replay',
            type: 'boolean',
        },
        {
            name: 'browserUnbundling',
            baseName: 'browserUnbundling',
            type: 'boolean',
        },
        {
            name: 'browserUnbundlingPublic',
            baseName: 'browserUnbundlingPublic',
            type: 'boolean',
        },
    ];
    return DestinationMetadataFeaturesV1;
}());
exports.DestinationMetadataFeaturesV1 = DestinationMetadataFeaturesV1;
(function (DestinationMetadataFeaturesV1) {
    var CloudModeInstancesEnum;
    (function (CloudModeInstancesEnum) {
        CloudModeInstancesEnum[CloudModeInstancesEnum["_0"] = '0'] = "_0";
        CloudModeInstancesEnum[CloudModeInstancesEnum["_1"] = '1'] = "_1";
        CloudModeInstancesEnum[CloudModeInstancesEnum["MULTIPLE"] = 'MULTIPLE'] = "MULTIPLE";
        CloudModeInstancesEnum[CloudModeInstancesEnum["NONE"] = 'NONE'] = "NONE";
        CloudModeInstancesEnum[CloudModeInstancesEnum["SINGLE"] = 'SINGLE'] = "SINGLE";
    })(CloudModeInstancesEnum = DestinationMetadataFeaturesV1.CloudModeInstancesEnum || (DestinationMetadataFeaturesV1.CloudModeInstancesEnum = {}));
    var DeviceModeInstancesEnum;
    (function (DeviceModeInstancesEnum) {
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["_0"] = '0'] = "_0";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["_1"] = '1'] = "_1";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["NONE"] = 'NONE'] = "NONE";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["SINGLE"] = 'SINGLE'] = "SINGLE";
    })(DeviceModeInstancesEnum = DestinationMetadataFeaturesV1.DeviceModeInstancesEnum || (DestinationMetadataFeaturesV1.DeviceModeInstancesEnum = {}));
})(DestinationMetadataFeaturesV1 = exports.DestinationMetadataFeaturesV1 || (exports.DestinationMetadataFeaturesV1 = {}));
exports.DestinationMetadataFeaturesV1 = DestinationMetadataFeaturesV1;
//# sourceMappingURL=destinationMetadataFeaturesV1.js.map