"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersV1Output = void 0;
var ListUsersV1Output = (function () {
    function ListUsersV1Output() {
    }
    ListUsersV1Output.getAttributeTypeMap = function () {
        return ListUsersV1Output.attributeTypeMap;
    };
    ListUsersV1Output.discriminator = undefined;
    ListUsersV1Output.attributeTypeMap = [
        {
            name: 'users',
            baseName: 'users',
            type: 'Array<UserV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListUsersV1Output;
}());
exports.ListUsersV1Output = ListUsersV1Output;
//# sourceMappingURL=listUsersV1Output.js.map