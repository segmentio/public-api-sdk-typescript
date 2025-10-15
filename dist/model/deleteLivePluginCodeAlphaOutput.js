"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLivePluginCodeAlphaOutput = void 0;
var DeleteLivePluginCodeAlphaOutput = (function () {
    function DeleteLivePluginCodeAlphaOutput() {
    }
    DeleteLivePluginCodeAlphaOutput.getAttributeTypeMap = function () {
        return DeleteLivePluginCodeAlphaOutput.attributeTypeMap;
    };
    DeleteLivePluginCodeAlphaOutput.discriminator = undefined;
    DeleteLivePluginCodeAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteLivePluginCodeAlphaOutput.StatusEnum',
        },
    ];
    return DeleteLivePluginCodeAlphaOutput;
}());
exports.DeleteLivePluginCodeAlphaOutput = DeleteLivePluginCodeAlphaOutput;
(function (DeleteLivePluginCodeAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteLivePluginCodeAlphaOutput.StatusEnum || (DeleteLivePluginCodeAlphaOutput.StatusEnum = {}));
})(DeleteLivePluginCodeAlphaOutput = exports.DeleteLivePluginCodeAlphaOutput || (exports.DeleteLivePluginCodeAlphaOutput = {}));
exports.DeleteLivePluginCodeAlphaOutput = DeleteLivePluginCodeAlphaOutput;
//# sourceMappingURL=deleteLivePluginCodeAlphaOutput.js.map