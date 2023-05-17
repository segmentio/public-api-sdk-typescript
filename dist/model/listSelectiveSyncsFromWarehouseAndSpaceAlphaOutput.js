"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput = void 0;
var ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput = (function () {
    function ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput() {
    }
    ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.getAttributeTypeMap = function () {
        return ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.attributeTypeMap;
    };
    ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.discriminator = undefined;
    ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'items',
            baseName: 'items',
            type: 'Array<SpaceWarehouseSelectiveSyncItemAlpha>',
        },
        {
            name: 'enableEventTables',
            baseName: 'enableEventTables',
            type: 'boolean',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput;
}());
exports.ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput = ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput;
//# sourceMappingURL=listSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.js.map