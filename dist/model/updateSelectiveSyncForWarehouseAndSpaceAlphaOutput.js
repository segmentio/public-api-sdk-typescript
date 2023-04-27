"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = void 0;
var UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = (function () {
    function UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput() {
    }
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.getAttributeTypeMap = function () {
        return UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.attributeTypeMap;
    };
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.discriminator = undefined;
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum',
        },
        {
            name: 'warnings',
            baseName: 'warnings',
            type: 'Array<string>',
        },
    ];
    return UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput;
}());
exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput;
(function (UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["UNCHANGED"] = 'UNCHANGED'] = "UNCHANGED";
        StatusEnum[StatusEnum["UPDATED"] = 'UPDATED'] = "UPDATED";
    })(StatusEnum = UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum || (UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput.StatusEnum = {}));
})(UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput || (exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = {}));
exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput = UpdateSelectiveSyncForWarehouseAndSpaceAlphaOutput;
//# sourceMappingURL=updateSelectiveSyncForWarehouseAndSpaceAlphaOutput.js.map