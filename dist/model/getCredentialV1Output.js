"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCredentialV1Output = void 0;
var GetCredentialV1Output = (function () {
    function GetCredentialV1Output() {
    }
    GetCredentialV1Output.getAttributeTypeMap = function () {
        return GetCredentialV1Output.attributeTypeMap;
    };
    GetCredentialV1Output.discriminator = undefined;
    GetCredentialV1Output.attributeTypeMap = [
        {
            name: 'credential',
            baseName: 'credential',
            type: 'CredentialV1',
        },
        {
            name: 'disabledFields',
            baseName: 'disabledFields',
            type: 'Array<string>',
        },
    ];
    return GetCredentialV1Output;
}());
exports.GetCredentialV1Output = GetCredentialV1Output;
//# sourceMappingURL=getCredentialV1Output.js.map