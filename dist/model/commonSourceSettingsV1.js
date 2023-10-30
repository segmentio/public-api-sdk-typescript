"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonSourceSettingsV1 = void 0;
var CommonSourceSettingsV1 = (function () {
    function CommonSourceSettingsV1() {
    }
    CommonSourceSettingsV1.getAttributeTypeMap = function () {
        return CommonSourceSettingsV1.attributeTypeMap;
    };
    CommonSourceSettingsV1.discriminator = undefined;
    CommonSourceSettingsV1.attributeTypeMap = [
        {
            name: 'track',
            baseName: 'track',
            type: 'TrackSourceSettingsV1',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'IdentifySourceSettingsV1',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'GroupSourceSettingsV1',
        },
        {
            name: 'forwardingViolationsTo',
            baseName: 'forwardingViolationsTo',
            type: 'string',
        },
        {
            name: 'forwardingBlockedEventsTo',
            baseName: 'forwardingBlockedEventsTo',
            type: 'string',
        },
    ];
    return CommonSourceSettingsV1;
}());
exports.CommonSourceSettingsV1 = CommonSourceSettingsV1;
//# sourceMappingURL=commonSourceSettingsV1.js.map