"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
var Key = (function () {
    function Key() {
    }
    Key.getAttributeTypeMap = function () {
        return Key.attributeTypeMap;
    };
    Key.discriminator = undefined;
    Key.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
    ];
    return Key;
}());
exports.Key = Key;
//# sourceMappingURL=key.js.map