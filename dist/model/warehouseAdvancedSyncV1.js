"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseAdvancedSyncV1 = void 0;
var WarehouseAdvancedSyncV1 = (function () {
    function WarehouseAdvancedSyncV1() {
    }
    WarehouseAdvancedSyncV1.getAttributeTypeMap = function () {
        return WarehouseAdvancedSyncV1.attributeTypeMap;
    };
    WarehouseAdvancedSyncV1.discriminator = undefined;
    WarehouseAdvancedSyncV1.attributeTypeMap = [
        {
            name: 'hourOfDay',
            baseName: 'hourOfDay',
            type: 'number',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];
    return WarehouseAdvancedSyncV1;
}());
exports.WarehouseAdvancedSyncV1 = WarehouseAdvancedSyncV1;
//# sourceMappingURL=warehouseAdvancedSyncV1.js.map