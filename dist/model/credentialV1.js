"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialV1 = void 0;
var CredentialV1 = (function () {
    function CredentialV1() {
    }
    CredentialV1.getAttributeTypeMap = function () {
        return CredentialV1.attributeTypeMap;
    };
    CredentialV1.discriminator = undefined;
    CredentialV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
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
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return CredentialV1;
}());
exports.CredentialV1 = CredentialV1;
//# sourceMappingURL=credentialV1.js.map