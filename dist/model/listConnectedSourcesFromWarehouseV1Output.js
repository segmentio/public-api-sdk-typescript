"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectedSourcesFromWarehouseV1Output = void 0;
var ListConnectedSourcesFromWarehouseV1Output = (function () {
    function ListConnectedSourcesFromWarehouseV1Output() {
    }
    ListConnectedSourcesFromWarehouseV1Output.getAttributeTypeMap = function () {
        return ListConnectedSourcesFromWarehouseV1Output.attributeTypeMap;
    };
    ListConnectedSourcesFromWarehouseV1Output.discriminator = undefined;
    ListConnectedSourcesFromWarehouseV1Output.attributeTypeMap = [
        {
            name: 'sources',
            baseName: 'sources',
            type: 'Array<SourceV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListConnectedSourcesFromWarehouseV1Output;
}());
exports.ListConnectedSourcesFromWarehouseV1Output = ListConnectedSourcesFromWarehouseV1Output;
//# sourceMappingURL=listConnectedSourcesFromWarehouseV1Output.js.map