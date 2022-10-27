"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelectiveSyncForWarehouseV1Output = void 0;
var UpdateSelectiveSyncForWarehouseV1Output = (function () {
    function UpdateSelectiveSyncForWarehouseV1Output() {
    }
    UpdateSelectiveSyncForWarehouseV1Output.getAttributeTypeMap = function () {
        return UpdateSelectiveSyncForWarehouseV1Output.attributeTypeMap;
    };
    UpdateSelectiveSyncForWarehouseV1Output.discriminator = undefined;
    UpdateSelectiveSyncForWarehouseV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateSelectiveSyncForWarehouseV1Output.StatusEnum',
        },
        {
            name: 'warnings',
            baseName: 'warnings',
            type: 'Array<string>',
        },
    ];
    return UpdateSelectiveSyncForWarehouseV1Output;
}());
exports.UpdateSelectiveSyncForWarehouseV1Output = UpdateSelectiveSyncForWarehouseV1Output;
(function (UpdateSelectiveSyncForWarehouseV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["UNCHANGED"] = 'UNCHANGED'] = "UNCHANGED";
        StatusEnum[StatusEnum["UPDATED"] = 'UPDATED'] = "UPDATED";
    })(StatusEnum = UpdateSelectiveSyncForWarehouseV1Output.StatusEnum || (UpdateSelectiveSyncForWarehouseV1Output.StatusEnum = {}));
})(UpdateSelectiveSyncForWarehouseV1Output = exports.UpdateSelectiveSyncForWarehouseV1Output || (exports.UpdateSelectiveSyncForWarehouseV1Output = {}));
exports.UpdateSelectiveSyncForWarehouseV1Output = UpdateSelectiveSyncForWarehouseV1Output;
//# sourceMappingURL=updateSelectiveSyncForWarehouseV1Output.js.map