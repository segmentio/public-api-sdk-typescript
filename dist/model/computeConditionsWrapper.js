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
            type: 'string',
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
//# sourceMappingURL=computeConditionsWrapper.js.map