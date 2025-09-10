"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeConditionsWrapper = void 0;
var ComputeConditionsWrapper = (function () {
    function ComputeConditionsWrapper() {
    }
    ComputeConditionsWrapper.getAttributeTypeMap = function () {
        return ComputeConditionsWrapper.attributeTypeMap;
    };
    ComputeConditionsWrapper.discriminator = undefined;
    ComputeConditionsWrapper.attributeTypeMap = [
        {
            name: 'format',
            baseName: 'format',
            type: 'ComputeConditionsWrapper.FormatEnum',
        },
        {
            name: 'conditions',
            baseName: 'conditions',
            type: 'object',
        },
    ];
    return ComputeConditionsWrapper;
}());
exports.ComputeConditionsWrapper = ComputeConditionsWrapper;
(function (ComputeConditionsWrapper) {
    var FormatEnum;
    (function (FormatEnum) {
        FormatEnum[FormatEnum["AST"] = 'AST'] = "AST";
        FormatEnum[FormatEnum["CQL"] = 'CQL'] = "CQL";
    })(FormatEnum = ComputeConditionsWrapper.FormatEnum || (ComputeConditionsWrapper.FormatEnum = {}));
})(ComputeConditionsWrapper = exports.ComputeConditionsWrapper || (exports.ComputeConditionsWrapper = {}));
exports.ComputeConditionsWrapper = ComputeConditionsWrapper;
//# sourceMappingURL=computeConditionsWrapper.js.map