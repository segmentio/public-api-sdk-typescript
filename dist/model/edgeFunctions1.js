"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeFunctions1 = void 0;
var EdgeFunctions1 = (function () {
    function EdgeFunctions1() {
    }
    EdgeFunctions1.getAttributeTypeMap = function () {
        return EdgeFunctions1.attributeTypeMap;
    };
    EdgeFunctions1.discriminator = undefined;
    EdgeFunctions1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'downloadURL',
            baseName: 'downloadURL',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];
    return EdgeFunctions1;
}());
exports.EdgeFunctions1 = EdgeFunctions1;
//# sourceMappingURL=edgeFunctions1.js.map