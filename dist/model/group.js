"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = (function () {
    function Group() {
    }
    Group.getAttributeTypeMap = function () {
        return Group.attributeTypeMap;
    };
    Group.discriminator = undefined;
    Group.attributeTypeMap = [
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
            type: 'Group.CommonEventOnViolationsEnum',
        },
    ];
    return Group;
}());
exports.Group = Group;
(function (Group) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_TRAITS"] = 'OMIT_TRAITS'] = "OMIT_TRAITS";
    })(CommonEventOnViolationsEnum = Group.CommonEventOnViolationsEnum || (Group.CommonEventOnViolationsEnum = {}));
})(Group = exports.Group || (exports.Group = {}));
exports.Group = Group;
//# sourceMappingURL=group.js.map