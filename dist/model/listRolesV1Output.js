"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesV1Output = void 0;
var ListRolesV1Output = (function () {
    function ListRolesV1Output() {
    }
    ListRolesV1Output.getAttributeTypeMap = function () {
        return ListRolesV1Output.attributeTypeMap;
    };
    ListRolesV1Output.discriminator = undefined;
    ListRolesV1Output.attributeTypeMap = [
        {
            name: 'roles',
            baseName: 'roles',
            type: 'Array<RoleV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListRolesV1Output;
}());
exports.ListRolesV1Output = ListRolesV1Output;
//# sourceMappingURL=listRolesV1Output.js.map