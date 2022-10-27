"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSelectiveSyncsFromWarehouseAndSourceV1Output = void 0;
var ListSelectiveSyncsFromWarehouseAndSourceV1Output = (function () {
    function ListSelectiveSyncsFromWarehouseAndSourceV1Output() {
    }
    ListSelectiveSyncsFromWarehouseAndSourceV1Output.getAttributeTypeMap = function () {
        return ListSelectiveSyncsFromWarehouseAndSourceV1Output.attributeTypeMap;
    };
    ListSelectiveSyncsFromWarehouseAndSourceV1Output.discriminator = undefined;
    ListSelectiveSyncsFromWarehouseAndSourceV1Output.attributeTypeMap = [
        {
            name: 'items',
            baseName: 'items',
            type: 'Array<WarehouseSelectiveSyncItemV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListSelectiveSyncsFromWarehouseAndSourceV1Output;
}());
exports.ListSelectiveSyncsFromWarehouseAndSourceV1Output = ListSelectiveSyncsFromWarehouseAndSourceV1Output;
//# sourceMappingURL=listSelectiveSyncsFromWarehouseAndSourceV1Output.js.map