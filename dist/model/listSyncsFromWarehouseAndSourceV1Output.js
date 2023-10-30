"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSyncsFromWarehouseAndSourceV1Output = void 0;
var ListSyncsFromWarehouseAndSourceV1Output = (function () {
    function ListSyncsFromWarehouseAndSourceV1Output() {
    }
    ListSyncsFromWarehouseAndSourceV1Output.getAttributeTypeMap = function () {
        return ListSyncsFromWarehouseAndSourceV1Output.attributeTypeMap;
    };
    ListSyncsFromWarehouseAndSourceV1Output.discriminator = undefined;
    ListSyncsFromWarehouseAndSourceV1Output.attributeTypeMap = [
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
    return ListSyncsFromWarehouseAndSourceV1Output;
}());
exports.ListSyncsFromWarehouseAndSourceV1Output = ListSyncsFromWarehouseAndSourceV1Output;
//# sourceMappingURL=listSyncsFromWarehouseAndSourceV1Output.js.map