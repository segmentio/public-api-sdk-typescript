"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
var Space = (function () {
    function Space() {
    }
    Space.getAttributeTypeMap = function () {
        return Space.attributeTypeMap;
    };
    Space.discriminator = undefined;
    Space.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
    ];
    return Space;
}());
exports.Space = Space;
//# sourceMappingURL=space.js.map