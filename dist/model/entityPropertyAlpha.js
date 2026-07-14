"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPropertyAlpha = void 0;
var EntityPropertyAlpha = (function () {
    function EntityPropertyAlpha() {
    }
    EntityPropertyAlpha.getAttributeTypeMap = function () {
        return EntityPropertyAlpha.attributeTypeMap;
    };
    EntityPropertyAlpha.discriminator = undefined;
    EntityPropertyAlpha.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'primaryKey',
            baseName: 'primaryKey',
            type: 'boolean',
        },
        {
            name: 'dataType',
            baseName: 'dataType',
            type: 'string',
        },
        {
            name: 'samples',
            baseName: 'samples',
            type: 'Array<string>',
        },
    ];
    return EntityPropertyAlpha;
}());
exports.EntityPropertyAlpha = EntityPropertyAlpha;
//# sourceMappingURL=entityPropertyAlpha.js.map