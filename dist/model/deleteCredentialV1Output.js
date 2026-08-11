"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCredentialV1Output = void 0;
var DeleteCredentialV1Output = (function () {
    function DeleteCredentialV1Output() {
    }
    DeleteCredentialV1Output.getAttributeTypeMap = function () {
        return DeleteCredentialV1Output.attributeTypeMap;
    };
    DeleteCredentialV1Output.discriminator = undefined;
    DeleteCredentialV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteCredentialV1Output.StatusEnum',
        },
    ];
    return DeleteCredentialV1Output;
}());
exports.DeleteCredentialV1Output = DeleteCredentialV1Output;
(function (DeleteCredentialV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteCredentialV1Output.StatusEnum || (DeleteCredentialV1Output.StatusEnum = {}));
})(DeleteCredentialV1Output = exports.DeleteCredentialV1Output || (exports.DeleteCredentialV1Output = {}));
exports.DeleteCredentialV1Output = DeleteCredentialV1Output;
//# sourceMappingURL=deleteCredentialV1Output.js.map