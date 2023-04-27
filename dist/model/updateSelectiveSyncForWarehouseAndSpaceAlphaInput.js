"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput = void 0;
var UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput = (function () {
    function UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput() {
    }
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput.getAttributeTypeMap = function () {
        return UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput.attributeTypeMap;
    };
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput.discriminator = undefined;
    UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput.attributeTypeMap = [
        {
            name: 'syncOverrides',
            baseName: 'syncOverrides',
            type: 'Array<SpaceWarehouseSchemaOverride>',
        },
        {
            name: 'enableEventTables',
            baseName: 'enableEventTables',
            type: 'boolean',
        },
    ];
    return UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput;
}());
exports.UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput = UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput;
//# sourceMappingURL=updateSelectiveSyncForWarehouseAndSpaceAlphaInput.js.map