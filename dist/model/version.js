"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
var Version = (function () {
    function Version() {
    }
    Version.getAttributeTypeMap = function () {
        return Version.attributeTypeMap;
    };
    Version.discriminator = undefined;
    Version.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'author',
            baseName: 'author',
            type: 'string',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'isDeployed',
            baseName: 'isDeployed',
            type: 'boolean',
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
        {
            name: 'deployedAt',
            baseName: 'deployedAt',
            type: 'string',
        },
    ];
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=version.js.map