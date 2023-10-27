"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSyncsFromWarehouseV1Output = void 0;
var ListSyncsFromWarehouseV1Output = (function () {
    function ListSyncsFromWarehouseV1Output() {
    }
    ListSyncsFromWarehouseV1Output.getAttributeTypeMap = function () {
        return ListSyncsFromWarehouseV1Output.attributeTypeMap;
    };
    ListSyncsFromWarehouseV1Output.discriminator = undefined;
    ListSyncsFromWarehouseV1Output.attributeTypeMap = [
        {
            name: 'reports',
            baseName: 'reports',
            type: 'Array<SyncV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSyncsFromWarehouseV1Output;
}());
exports.ListSyncsFromWarehouseV1Output = ListSyncsFromWarehouseV1Output;
//# sourceMappingURL=listSyncsFromWarehouseV1Output.js.map