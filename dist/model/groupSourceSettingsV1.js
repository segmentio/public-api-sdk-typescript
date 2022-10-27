"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSourceSettingsV1 = void 0;
var GroupSourceSettingsV1 = (function () {
    function GroupSourceSettingsV1() {
    }
    GroupSourceSettingsV1.getAttributeTypeMap = function () {
        return GroupSourceSettingsV1.attributeTypeMap;
    };
    GroupSourceSettingsV1.discriminator = undefined;
    GroupSourceSettingsV1.attributeTypeMap = [
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
            type: 'GroupSourceSettingsV1.CommonEventOnViolationsEnum',
        },
    ];
    return GroupSourceSettingsV1;
}());
exports.GroupSourceSettingsV1 = GroupSourceSettingsV1;
(function (GroupSourceSettingsV1) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_TRAITS"] = 'OMIT_TRAITS'] = "OMIT_TRAITS";
    })(CommonEventOnViolationsEnum = GroupSourceSettingsV1.CommonEventOnViolationsEnum || (GroupSourceSettingsV1.CommonEventOnViolationsEnum = {}));
})(GroupSourceSettingsV1 = exports.GroupSourceSettingsV1 || (exports.GroupSourceSettingsV1 = {}));
exports.GroupSourceSettingsV1 = GroupSourceSettingsV1;
//# sourceMappingURL=groupSourceSettingsV1.js.map