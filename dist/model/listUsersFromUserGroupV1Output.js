"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersFromUserGroupV1Output = void 0;
var ListUsersFromUserGroupV1Output = (function () {
    function ListUsersFromUserGroupV1Output() {
    }
    ListUsersFromUserGroupV1Output.getAttributeTypeMap = function () {
        return ListUsersFromUserGroupV1Output.attributeTypeMap;
    };
    ListUsersFromUserGroupV1Output.discriminator = undefined;
    ListUsersFromUserGroupV1Output.attributeTypeMap = [
        {
            name: 'users',
            baseName: 'users',
            type: 'Array<MinimalUserV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListUsersFromUserGroupV1Output;
}());
exports.ListUsersFromUserGroupV1Output = ListUsersFromUserGroupV1Output;
//# sourceMappingURL=listUsersFromUserGroupV1Output.js.map