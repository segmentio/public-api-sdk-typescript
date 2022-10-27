"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSourceAlphaOutput = void 0;
var DeleteSourceAlphaOutput = (function () {
    function DeleteSourceAlphaOutput() {
    }
    DeleteSourceAlphaOutput.getAttributeTypeMap = function () {
        return DeleteSourceAlphaOutput.attributeTypeMap;
    };
    DeleteSourceAlphaOutput.discriminator = undefined;
    DeleteSourceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteSourceAlphaOutput.StatusEnum',
        },
    ];
    return DeleteSourceAlphaOutput;
}());
exports.DeleteSourceAlphaOutput = DeleteSourceAlphaOutput;
(function (DeleteSourceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteSourceAlphaOutput.StatusEnum || (DeleteSourceAlphaOutput.StatusEnum = {}));
})(DeleteSourceAlphaOutput = exports.DeleteSourceAlphaOutput || (exports.DeleteSourceAlphaOutput = {}));
exports.DeleteSourceAlphaOutput = DeleteSourceAlphaOutput;
//# sourceMappingURL=deleteSourceAlphaOutput.js.map