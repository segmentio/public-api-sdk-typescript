"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCredentialV1Input = void 0;
var UpdateCredentialV1Input = (function () {
    function UpdateCredentialV1Input() {
    }
    UpdateCredentialV1Input.getAttributeTypeMap = function () {
        return UpdateCredentialV1Input.attributeTypeMap;
    };
    UpdateCredentialV1Input.discriminator = undefined;
    UpdateCredentialV1Input.attributeTypeMap = [
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
    return UpdateCredentialV1Input;
}());
exports.UpdateCredentialV1Input = UpdateCredentialV1Input;
//# sourceMappingURL=updateCredentialV1Input.js.map