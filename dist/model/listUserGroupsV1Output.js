"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserGroupsV1Output = void 0;
var ListUserGroupsV1Output = (function () {
    function ListUserGroupsV1Output() {
    }
    ListUserGroupsV1Output.getAttributeTypeMap = function () {
        return ListUserGroupsV1Output.attributeTypeMap;
    };
    ListUserGroupsV1Output.discriminator = undefined;
    ListUserGroupsV1Output.attributeTypeMap = [
        {
            name: 'userGroups',
            baseName: 'userGroups',
            type: 'Array<UserGroupV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListUserGroupsV1Output;
}());
exports.ListUserGroupsV1Output = ListUserGroupsV1Output;
//# sourceMappingURL=listUserGroupsV1Output.js.map