"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCredentialV1Input = void 0;
var CreateCredentialV1Input = (function () {
    function CreateCredentialV1Input() {
    }
    CreateCredentialV1Input.getAttributeTypeMap = function () {
        return CreateCredentialV1Input.attributeTypeMap;
    };
    CreateCredentialV1Input.discriminator = undefined;
    CreateCredentialV1Input.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return CreateCredentialV1Input;
}());
exports.CreateCredentialV1Input = CreateCredentialV1Input;
//# sourceMappingURL=createCredentialV1Input.js.map