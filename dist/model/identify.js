"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identify = void 0;
var Identify = (function () {
    function Identify() {
    }
    Identify.getAttributeTypeMap = function () {
        return Identify.attributeTypeMap;
    };
    Identify.discriminator = undefined;
    Identify.attributeTypeMap = [
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
            type: 'Identify.CommonEventOnViolationsEnum',
        },
    ];
    return Identify;
}());
exports.Identify = Identify;
(function (Identify) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_TRAITS"] = 'OMIT_TRAITS'] = "OMIT_TRAITS";
    })(CommonEventOnViolationsEnum = Identify.CommonEventOnViolationsEnum || (Identify.CommonEventOnViolationsEnum = {}));
})(Identify = exports.Identify || (exports.Identify = {}));
exports.Identify = Identify;
//# sourceMappingURL=identify.js.map