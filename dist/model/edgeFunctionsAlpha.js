"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeFunctionsAlpha = void 0;
var EdgeFunctionsAlpha = (function () {
    function EdgeFunctionsAlpha() {
    }
    EdgeFunctionsAlpha.getAttributeTypeMap = function () {
        return EdgeFunctionsAlpha.attributeTypeMap;
    };
    EdgeFunctionsAlpha.discriminator = undefined;
    EdgeFunctionsAlpha.attributeTypeMap = [
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
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
    ];
    return EdgeFunctionsAlpha;
}());
exports.EdgeFunctionsAlpha = EdgeFunctionsAlpha;
//# sourceMappingURL=edgeFunctionsAlpha.js.map