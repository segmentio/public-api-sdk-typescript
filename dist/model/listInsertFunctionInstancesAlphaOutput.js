"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInsertFunctionInstancesAlphaOutput = void 0;
var ListInsertFunctionInstancesAlphaOutput = (function () {
    function ListInsertFunctionInstancesAlphaOutput() {
    }
    ListInsertFunctionInstancesAlphaOutput.getAttributeTypeMap = function () {
        return ListInsertFunctionInstancesAlphaOutput.attributeTypeMap;
    };
    ListInsertFunctionInstancesAlphaOutput.discriminator = undefined;
    ListInsertFunctionInstancesAlphaOutput.attributeTypeMap = [
        {
            name: 'instances',
            baseName: 'instances',
            type: 'Array<InsertFunctionInstanceAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListInsertFunctionInstancesAlphaOutput;
}());
exports.ListInsertFunctionInstancesAlphaOutput = ListInsertFunctionInstancesAlphaOutput;
//# sourceMappingURL=listInsertFunctionInstancesAlphaOutput.js.map