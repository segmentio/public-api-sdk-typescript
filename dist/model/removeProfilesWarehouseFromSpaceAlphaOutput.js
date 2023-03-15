"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProfilesWarehouseFromSpaceAlphaOutput = void 0;
var RemoveProfilesWarehouseFromSpaceAlphaOutput = (function () {
    function RemoveProfilesWarehouseFromSpaceAlphaOutput() {
    }
    RemoveProfilesWarehouseFromSpaceAlphaOutput.getAttributeTypeMap = function () {
        return RemoveProfilesWarehouseFromSpaceAlphaOutput.attributeTypeMap;
    };
    RemoveProfilesWarehouseFromSpaceAlphaOutput.discriminator = undefined;
    RemoveProfilesWarehouseFromSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum',
        },
    ];
    return RemoveProfilesWarehouseFromSpaceAlphaOutput;
}());
exports.RemoveProfilesWarehouseFromSpaceAlphaOutput = RemoveProfilesWarehouseFromSpaceAlphaOutput;
(function (RemoveProfilesWarehouseFromSpaceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum || (RemoveProfilesWarehouseFromSpaceAlphaOutput.StatusEnum = {}));
})(RemoveProfilesWarehouseFromSpaceAlphaOutput = exports.RemoveProfilesWarehouseFromSpaceAlphaOutput || (exports.RemoveProfilesWarehouseFromSpaceAlphaOutput = {}));
exports.RemoveProfilesWarehouseFromSpaceAlphaOutput = RemoveProfilesWarehouseFromSpaceAlphaOutput;
//# sourceMappingURL=removeProfilesWarehouseFromSpaceAlphaOutput.js.map