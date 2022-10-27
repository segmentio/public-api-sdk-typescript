"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvitesV1Input = void 0;
var CreateInvitesV1Input = (function () {
    function CreateInvitesV1Input() {
    }
    CreateInvitesV1Input.getAttributeTypeMap = function () {
        return CreateInvitesV1Input.attributeTypeMap;
    };
    CreateInvitesV1Input.discriminator = undefined;
    CreateInvitesV1Input.attributeTypeMap = [
        {
            name: 'invites',
            baseName: 'invites',
            type: 'Array<InviteV1>',
        },
    ];
    return CreateInvitesV1Input;
}());
exports.CreateInvitesV1Input = CreateInvitesV1Input;
//# sourceMappingURL=createInvitesV1Input.js.map