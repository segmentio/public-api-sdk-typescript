"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceUsersInUserGroupV1Input = void 0;
var ReplaceUsersInUserGroupV1Input = (function () {
    function ReplaceUsersInUserGroupV1Input() {
    }
    ReplaceUsersInUserGroupV1Input.getAttributeTypeMap = function () {
        return ReplaceUsersInUserGroupV1Input.attributeTypeMap;
    };
    ReplaceUsersInUserGroupV1Input.discriminator = undefined;
    ReplaceUsersInUserGroupV1Input.attributeTypeMap = [
        {
            name: 'emails',
            baseName: 'emails',
            type: 'Array<string>',
        },
    ];
    return ReplaceUsersInUserGroupV1Input;
}());
exports.ReplaceUsersInUserGroupV1Input = ReplaceUsersInUserGroupV1Input;
//# sourceMappingURL=replaceUsersInUserGroupV1Input.js.map