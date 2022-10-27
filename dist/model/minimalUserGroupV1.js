"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalUserGroupV1 = void 0;
var MinimalUserGroupV1 = (function () {
    function MinimalUserGroupV1() {
    }
    MinimalUserGroupV1.getAttributeTypeMap = function () {
        return MinimalUserGroupV1.attributeTypeMap;
    };
    MinimalUserGroupV1.discriminator = undefined;
    MinimalUserGroupV1.attributeTypeMap = [
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
    ];
    return MinimalUserGroupV1;
}());
exports.MinimalUserGroupV1 = MinimalUserGroupV1;
//# sourceMappingURL=minimalUserGroupV1.js.map