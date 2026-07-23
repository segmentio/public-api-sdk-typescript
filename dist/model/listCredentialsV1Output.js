"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCredentialsV1Output = void 0;
var ListCredentialsV1Output = (function () {
    function ListCredentialsV1Output() {
    }
    ListCredentialsV1Output.getAttributeTypeMap = function () {
        return ListCredentialsV1Output.attributeTypeMap;
    };
    ListCredentialsV1Output.discriminator = undefined;
    ListCredentialsV1Output.attributeTypeMap = [
        {
            name: 'credentials',
            baseName: 'credentials',
            type: 'Array<CredentialV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListCredentialsV1Output;
}());
exports.ListCredentialsV1Output = ListCredentialsV1Output;
//# sourceMappingURL=listCredentialsV1Output.js.map