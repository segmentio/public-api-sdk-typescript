"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackSourceSettingsV1 = void 0;
var TrackSourceSettingsV1 = (function () {
    function TrackSourceSettingsV1() {
    }
    TrackSourceSettingsV1.getAttributeTypeMap = function () {
        return TrackSourceSettingsV1.attributeTypeMap;
    };
    TrackSourceSettingsV1.discriminator = undefined;
    TrackSourceSettingsV1.attributeTypeMap = [
        {
            name: 'allowUnplannedEvents',
            baseName: 'allowUnplannedEvents',
            type: 'boolean',
        },
        {
            name: 'allowUnplannedEventProperties',
            baseName: 'allowUnplannedEventProperties',
            type: 'boolean',
        },
        {
            name: 'allowEventOnViolations',
            baseName: 'allowEventOnViolations',
            type: 'boolean',
        },
        {
            name: 'allowPropertiesOnViolations',
            baseName: 'allowPropertiesOnViolations',
            type: 'boolean',
        },
        {
            name: 'commonEventOnViolations',
            baseName: 'commonEventOnViolations',
            type: 'TrackSourceSettingsV1.CommonEventOnViolationsEnum',
        },
    ];
    return TrackSourceSettingsV1;
}());
exports.TrackSourceSettingsV1 = TrackSourceSettingsV1;
(function (TrackSourceSettingsV1) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_PROPERTIES"] = 'OMIT_PROPERTIES'] = "OMIT_PROPERTIES";
    })(CommonEventOnViolationsEnum = TrackSourceSettingsV1.CommonEventOnViolationsEnum || (TrackSourceSettingsV1.CommonEventOnViolationsEnum = {}));
})(TrackSourceSettingsV1 = exports.TrackSourceSettingsV1 || (exports.TrackSourceSettingsV1 = {}));
exports.TrackSourceSettingsV1 = TrackSourceSettingsV1;
//# sourceMappingURL=trackSourceSettingsV1.js.map