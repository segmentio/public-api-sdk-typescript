"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFiltersByIntegrationIdOutput = void 0;
var ListFiltersByIntegrationIdOutput = (function () {
    function ListFiltersByIntegrationIdOutput() {
    }
    ListFiltersByIntegrationIdOutput.getAttributeTypeMap = function () {
        return ListFiltersByIntegrationIdOutput.attributeTypeMap;
    };
    ListFiltersByIntegrationIdOutput.discriminator = undefined;
    ListFiltersByIntegrationIdOutput.attributeTypeMap = [
        {
            name: 'filters',
            baseName: 'filters',
            type: 'Array<Filter>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'ListFiltersPaginationOutput',
        },
    ];
    return ListFiltersByIntegrationIdOutput;
}());
exports.ListFiltersByIntegrationIdOutput = ListFiltersByIntegrationIdOutput;
//# sourceMappingURL=listFiltersByIntegrationIdOutput.js.map