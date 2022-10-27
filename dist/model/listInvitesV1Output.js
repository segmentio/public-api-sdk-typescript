"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInvitesV1Output = void 0;
var ListInvitesV1Output = (function () {
    function ListInvitesV1Output() {
    }
    ListInvitesV1Output.getAttributeTypeMap = function () {
        return ListInvitesV1Output.attributeTypeMap;
    };
    ListInvitesV1Output.discriminator = undefined;
    ListInvitesV1Output.attributeTypeMap = [
        {
            name: 'invites',
            baseName: 'invites',
            type: 'Array<string>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListInvitesV1Output;
}());
exports.ListInvitesV1Output = ListInvitesV1Output;
//# sourceMappingURL=listInvitesV1Output.js.map