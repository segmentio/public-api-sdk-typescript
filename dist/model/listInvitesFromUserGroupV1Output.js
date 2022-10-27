"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInvitesFromUserGroupV1Output = void 0;
var ListInvitesFromUserGroupV1Output = (function () {
    function ListInvitesFromUserGroupV1Output() {
    }
    ListInvitesFromUserGroupV1Output.getAttributeTypeMap = function () {
        return ListInvitesFromUserGroupV1Output.attributeTypeMap;
    };
    ListInvitesFromUserGroupV1Output.discriminator = undefined;
    ListInvitesFromUserGroupV1Output.attributeTypeMap = [
        {
            name: 'emails',
            baseName: 'emails',
            type: 'Array<string>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListInvitesFromUserGroupV1Output;
}());
exports.ListInvitesFromUserGroupV1Output = ListInvitesFromUserGroupV1Output;
//# sourceMappingURL=listInvitesFromUserGroupV1Output.js.map