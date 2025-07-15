"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivationSummaryOutput = void 0;
var ActivationSummaryOutput = (function () {
    function ActivationSummaryOutput() {
    }
    ActivationSummaryOutput.getAttributeTypeMap = function () {
        return ActivationSummaryOutput.attributeTypeMap;
    };
    ActivationSummaryOutput.discriminator = undefined;
    ActivationSummaryOutput.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];
    return ActivationSummaryOutput;
}());
exports.ActivationSummaryOutput = ActivationSummaryOutput;
//# sourceMappingURL=activationSummaryOutput.js.map