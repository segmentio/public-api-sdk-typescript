"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalUserV1 = void 0;
var MinimalUserV1 = (function () {
    function MinimalUserV1() {
    }
    MinimalUserV1.getAttributeTypeMap = function () {
        return MinimalUserV1.attributeTypeMap;
    };
    MinimalUserV1.discriminator = undefined;
    MinimalUserV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'email',
            baseName: 'email',
            type: 'string',
        },
    ];
    return MinimalUserV1;
}());
exports.MinimalUserV1 = MinimalUserV1;
//# sourceMappingURL=minimalUserV1.js.map