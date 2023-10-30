"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSourceAlphaOutput = void 0;
var GetSourceAlphaOutput = (function () {
    function GetSourceAlphaOutput() {
    }
    GetSourceAlphaOutput.getAttributeTypeMap = function () {
        return GetSourceAlphaOutput.attributeTypeMap;
    };
    GetSourceAlphaOutput.discriminator = undefined;
    GetSourceAlphaOutput.attributeTypeMap = [
        {
            name: 'source',
            baseName: 'source',
            type: 'SourceAlpha',
        },
        {
            name: 'trackingPlanId',
            baseName: 'trackingPlanId',
            type: 'string',
        },
    ];
    return GetSourceAlphaOutput;
}());
exports.GetSourceAlphaOutput = GetSourceAlphaOutput;
//# sourceMappingURL=getSourceAlphaOutput.js.map