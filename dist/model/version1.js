"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version1 = void 0;
var Version1 = (function () {
    function Version1() {
    }
    Version1.getAttributeTypeMap = function () {
        return Version1.attributeTypeMap;
    };
    Version1.discriminator = undefined;
    Version1.attributeTypeMap = [
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
    return Version1;
}());
exports.Version1 = Version1;
//# sourceMappingURL=version1.js.map