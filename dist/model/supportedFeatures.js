"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedFeatures = void 0;
var SupportedFeatures = (function () {
    function SupportedFeatures() {
    }
    SupportedFeatures.getAttributeTypeMap = function () {
        return SupportedFeatures.attributeTypeMap;
    };
    SupportedFeatures.discriminator = undefined;
    SupportedFeatures.attributeTypeMap = [
        {
            name: 'cloudModeInstances',
            baseName: 'cloudModeInstances',
            type: 'SupportedFeatures.CloudModeInstancesEnum',
        },
        {
            name: 'deviceModeInstances',
            baseName: 'deviceModeInstances',
            type: 'SupportedFeatures.DeviceModeInstancesEnum',
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
    return SupportedFeatures;
}());
exports.SupportedFeatures = SupportedFeatures;
(function (SupportedFeatures) {
    var CloudModeInstancesEnum;
    (function (CloudModeInstancesEnum) {
        CloudModeInstancesEnum[CloudModeInstancesEnum["_0"] = '0'] = "_0";
        CloudModeInstancesEnum[CloudModeInstancesEnum["_1"] = '1'] = "_1";
        CloudModeInstancesEnum[CloudModeInstancesEnum["MULTIPLE"] = 'MULTIPLE'] = "MULTIPLE";
        CloudModeInstancesEnum[CloudModeInstancesEnum["NONE"] = 'NONE'] = "NONE";
        CloudModeInstancesEnum[CloudModeInstancesEnum["SINGLE"] = 'SINGLE'] = "SINGLE";
    })(CloudModeInstancesEnum = SupportedFeatures.CloudModeInstancesEnum || (SupportedFeatures.CloudModeInstancesEnum = {}));
    var DeviceModeInstancesEnum;
    (function (DeviceModeInstancesEnum) {
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["_0"] = '0'] = "_0";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["_1"] = '1'] = "_1";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["NONE"] = 'NONE'] = "NONE";
        DeviceModeInstancesEnum[DeviceModeInstancesEnum["SINGLE"] = 'SINGLE'] = "SINGLE";
    })(DeviceModeInstancesEnum = SupportedFeatures.DeviceModeInstancesEnum || (SupportedFeatures.DeviceModeInstancesEnum = {}));
})(SupportedFeatures = exports.SupportedFeatures || (exports.SupportedFeatures = {}));
exports.SupportedFeatures = SupportedFeatures;
//# sourceMappingURL=supportedFeatures.js.map