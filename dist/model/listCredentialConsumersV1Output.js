"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCredentialConsumersV1Output = void 0;
var ListCredentialConsumersV1Output = (function () {
    function ListCredentialConsumersV1Output() {
    }
    ListCredentialConsumersV1Output.getAttributeTypeMap = function () {
        return ListCredentialConsumersV1Output.attributeTypeMap;
    };
    ListCredentialConsumersV1Output.discriminator = undefined;
    ListCredentialConsumersV1Output.attributeTypeMap = [
        {
            name: 'warehouses',
            baseName: 'warehouses',
            type: 'Array<WarehouseV1>',
        },
        {
            name: 'warehousesPagination',
            baseName: 'warehousesPagination',
            type: 'PaginationOutput',
        },
        {
            name: 'sources',
            baseName: 'sources',
            type: 'Array<SourceV1>',
        },
        {
            name: 'sourcesPagination',
            baseName: 'sourcesPagination',
            type: 'PaginationOutput',
        },
    ];
    return ListCredentialConsumersV1Output;
}());
exports.ListCredentialConsumersV1Output = ListCredentialConsumersV1Output;
//# sourceMappingURL=listCredentialConsumersV1Output.js.map