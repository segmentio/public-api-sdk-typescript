"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifySourceSettingsV1 = void 0;
var IdentifySourceSettingsV1 = (function () {
    function IdentifySourceSettingsV1() {
    }
    IdentifySourceSettingsV1.getAttributeTypeMap = function () {
        return IdentifySourceSettingsV1.attributeTypeMap;
    };
    IdentifySourceSettingsV1.discriminator = undefined;
    IdentifySourceSettingsV1.attributeTypeMap = [
        {
            name: 'allowUnplannedTraits',
            baseName: 'allowUnplannedTraits',
            type: 'boolean',
        },
        {
            name: 'allowTraitsOnViolations',
            baseName: 'allowTraitsOnViolations',
            type: 'boolean',
        },
        {
            name: 'commonEventOnViolations',
            baseName: 'commonEventOnViolations',
            type: 'IdentifySourceSettingsV1.CommonEventOnViolationsEnum',
        },
    ];
    return IdentifySourceSettingsV1;
}());
exports.IdentifySourceSettingsV1 = IdentifySourceSettingsV1;
(function (IdentifySourceSettingsV1) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_TRAITS"] = 'OMIT_TRAITS'] = "OMIT_TRAITS";
    })(CommonEventOnViolationsEnum = IdentifySourceSettingsV1.CommonEventOnViolationsEnum || (IdentifySourceSettingsV1.CommonEventOnViolationsEnum = {}));
})(IdentifySourceSettingsV1 = exports.IdentifySourceSettingsV1 || (exports.IdentifySourceSettingsV1 = {}));
exports.IdentifySourceSettingsV1 = IdentifySourceSettingsV1;
//# sourceMappingURL=identifySourceSettingsV1.js.map