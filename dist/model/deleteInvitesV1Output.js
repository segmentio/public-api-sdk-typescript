"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInvitesV1Output = void 0;
var DeleteInvitesV1Output = (function () {
    function DeleteInvitesV1Output() {
    }
    DeleteInvitesV1Output.getAttributeTypeMap = function () {
        return DeleteInvitesV1Output.attributeTypeMap;
    };
    DeleteInvitesV1Output.discriminator = undefined;
    DeleteInvitesV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteInvitesV1Output.StatusEnum',
        },
    ];
    return DeleteInvitesV1Output;
}());
exports.DeleteInvitesV1Output = DeleteInvitesV1Output;
(function (DeleteInvitesV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteInvitesV1Output.StatusEnum || (DeleteInvitesV1Output.StatusEnum = {}));
})(DeleteInvitesV1Output = exports.DeleteInvitesV1Output || (exports.DeleteInvitesV1Output = {}));
exports.DeleteInvitesV1Output = DeleteInvitesV1Output;
//# sourceMappingURL=deleteInvitesV1Output.js.map