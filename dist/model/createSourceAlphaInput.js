"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceAlphaInput = void 0;
var CreateSourceAlphaInput = (function () {
    function CreateSourceAlphaInput() {
    }
    CreateSourceAlphaInput.getAttributeTypeMap = function () {
        return CreateSourceAlphaInput.attributeTypeMap;
    };
    CreateSourceAlphaInput.discriminator = undefined;
    CreateSourceAlphaInput.attributeTypeMap = [
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'metadataId',
            baseName: 'metadataId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return CreateSourceAlphaInput;
}());
exports.CreateSourceAlphaInput = CreateSourceAlphaInput;
//# sourceMappingURL=createSourceAlphaInput.js.map