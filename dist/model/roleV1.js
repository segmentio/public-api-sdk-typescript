"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleV1 = void 0;
var RoleV1 = (function () {
    function RoleV1() {
    }
    RoleV1.getAttributeTypeMap = function () {
        return RoleV1.attributeTypeMap;
    };
    RoleV1.discriminator = undefined;
    RoleV1.attributeTypeMap = [
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
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];
    return RoleV1;
}());
exports.RoleV1 = RoleV1;
//# sourceMappingURL=roleV1.js.map