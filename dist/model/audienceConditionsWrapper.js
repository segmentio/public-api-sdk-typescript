"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceConditionsWrapper = void 0;
var AudienceConditionsWrapper = (function () {
    function AudienceConditionsWrapper() {
    }
    AudienceConditionsWrapper.getAttributeTypeMap = function () {
        return AudienceConditionsWrapper.attributeTypeMap;
    };
    AudienceConditionsWrapper.discriminator = undefined;
    AudienceConditionsWrapper.attributeTypeMap = [
        {
            name: 'format',
            baseName: 'format',
            type: 'AudienceConditionsWrapper.FormatEnum',
        },
        {
            name: 'conditions',
            baseName: 'conditions',
            type: 'object',
        },
    ];
    return AudienceConditionsWrapper;
}());
exports.AudienceConditionsWrapper = AudienceConditionsWrapper;
(function (AudienceConditionsWrapper) {
    var FormatEnum;
    (function (FormatEnum) {
        FormatEnum[FormatEnum["AST"] = 'AST'] = "AST";
        FormatEnum[FormatEnum["CQL"] = 'CQL'] = "CQL";
    })(FormatEnum = AudienceConditionsWrapper.FormatEnum || (AudienceConditionsWrapper.FormatEnum = {}));
})(AudienceConditionsWrapper = exports.AudienceConditionsWrapper || (exports.AudienceConditionsWrapper = {}));
exports.AudienceConditionsWrapper = AudienceConditionsWrapper;
//# sourceMappingURL=audienceConditionsWrapper.js.map