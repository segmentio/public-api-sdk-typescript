"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsersToUserGroupV1Input = void 0;
var AddUsersToUserGroupV1Input = (function () {
    function AddUsersToUserGroupV1Input() {
    }
    AddUsersToUserGroupV1Input.getAttributeTypeMap = function () {
        return AddUsersToUserGroupV1Input.attributeTypeMap;
    };
    AddUsersToUserGroupV1Input.discriminator = undefined;
    AddUsersToUserGroupV1Input.attributeTypeMap = [
        {
            name: 'emails',
            baseName: 'emails',
            type: 'Array<string>',
        },
    ];
    return AddUsersToUserGroupV1Input;
}());
exports.AddUsersToUserGroupV1Input = AddUsersToUserGroupV1Input;
//# sourceMappingURL=addUsersToUserGroupV1Input.js.map