"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveWriteKeyFromSourceAlphaOutput = void 0;
var RemoveWriteKeyFromSourceAlphaOutput = (function () {
    function RemoveWriteKeyFromSourceAlphaOutput() {
    }
    RemoveWriteKeyFromSourceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveWriteKeyFromSourceAlphaOutput.attributeTypeMap;
    };
    RemoveWriteKeyFromSourceAlphaOutput.discriminator = undefined;
    RemoveWriteKeyFromSourceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveWriteKeyFromSourceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveWriteKeyFromSourceAlphaOutput;
}());
exports.RemoveWriteKeyFromSourceAlphaOutput = RemoveWriteKeyFromSourceAlphaOutput;
(function (RemoveWriteKeyFromSourceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveWriteKeyFromSourceAlphaOutput.StatusEnum || (RemoveWriteKeyFromSourceAlphaOutput.StatusEnum = {}));
})(RemoveWriteKeyFromSourceAlphaOutput = exports.RemoveWriteKeyFromSourceAlphaOutput || (exports.RemoveWriteKeyFromSourceAlphaOutput = {}));
exports.RemoveWriteKeyFromSourceAlphaOutput = RemoveWriteKeyFromSourceAlphaOutput;
//# sourceMappingURL=removeWriteKeyFromSourceAlphaOutput.js.map