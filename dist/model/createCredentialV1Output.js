"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCredentialV1Output = void 0;
var CreateCredentialV1Output = (function () {
    function CreateCredentialV1Output() {
    }
    CreateCredentialV1Output.getAttributeTypeMap = function () {
        return CreateCredentialV1Output.attributeTypeMap;
    };
    CreateCredentialV1Output.discriminator = undefined;
    CreateCredentialV1Output.attributeTypeMap = [
        {
            name: 'credential',
            baseName: 'credential',
            type: 'CredentialV1',
        },
    ];
    return CreateCredentialV1Output;
}());
exports.CreateCredentialV1Output = CreateCredentialV1Output;
//# sourceMappingURL=createCredentialV1Output.js.map