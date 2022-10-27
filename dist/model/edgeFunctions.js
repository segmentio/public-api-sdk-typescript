"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeFunctions = void 0;
var EdgeFunctions = (function () {
    function EdgeFunctions() {
    }
    EdgeFunctions.getAttributeTypeMap = function () {
        return EdgeFunctions.attributeTypeMap;
    };
    EdgeFunctions.discriminator = undefined;
    EdgeFunctions.attributeTypeMap = [
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
    return EdgeFunctions;
}());
exports.EdgeFunctions = EdgeFunctions;
//# sourceMappingURL=edgeFunctions.js.map