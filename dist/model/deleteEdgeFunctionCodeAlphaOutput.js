"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEdgeFunctionCodeAlphaOutput = void 0;
var DeleteEdgeFunctionCodeAlphaOutput = (function () {
    function DeleteEdgeFunctionCodeAlphaOutput() {
    }
    DeleteEdgeFunctionCodeAlphaOutput.getAttributeTypeMap = function () {
        return DeleteEdgeFunctionCodeAlphaOutput.attributeTypeMap;
    };
    DeleteEdgeFunctionCodeAlphaOutput.discriminator = undefined;
    DeleteEdgeFunctionCodeAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteEdgeFunctionCodeAlphaOutput.StatusEnum',
        },
    ];
    return DeleteEdgeFunctionCodeAlphaOutput;
}());
exports.DeleteEdgeFunctionCodeAlphaOutput = DeleteEdgeFunctionCodeAlphaOutput;
(function (DeleteEdgeFunctionCodeAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteEdgeFunctionCodeAlphaOutput.StatusEnum || (DeleteEdgeFunctionCodeAlphaOutput.StatusEnum = {}));
})(DeleteEdgeFunctionCodeAlphaOutput = exports.DeleteEdgeFunctionCodeAlphaOutput || (exports.DeleteEdgeFunctionCodeAlphaOutput = {}));
exports.DeleteEdgeFunctionCodeAlphaOutput = DeleteEdgeFunctionCodeAlphaOutput;
//# sourceMappingURL=deleteEdgeFunctionCodeAlphaOutput.js.map