"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserV1 = void 0;
var UserV1 = (function () {
    function UserV1() {
    }
    UserV1.getAttributeTypeMap = function () {
        return UserV1.attributeTypeMap;
    };
    UserV1.discriminator = undefined;
    UserV1.attributeTypeMap = [
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
        {
            name: 'permissions',
            baseName: 'permissions',
            type: 'Array<PermissionV1>',
        },
    ];
    return UserV1;
}());
exports.UserV1 = UserV1;
//# sourceMappingURL=userV1.js.map