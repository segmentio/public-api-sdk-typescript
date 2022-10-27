"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserGroupsFromUserV1Output = void 0;
var ListUserGroupsFromUserV1Output = (function () {
    function ListUserGroupsFromUserV1Output() {
    }
    ListUserGroupsFromUserV1Output.getAttributeTypeMap = function () {
        return ListUserGroupsFromUserV1Output.attributeTypeMap;
    };
    ListUserGroupsFromUserV1Output.discriminator = undefined;
    ListUserGroupsFromUserV1Output.attributeTypeMap = [
        {
            name: 'groups',
            baseName: 'groups',
            type: 'Array<MinimalUserGroupV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListUserGroupsFromUserV1Output;
}());
exports.ListUserGroupsFromUserV1Output = ListUserGroupsFromUserV1Output;
//# sourceMappingURL=listUserGroupsFromUserV1Output.js.map