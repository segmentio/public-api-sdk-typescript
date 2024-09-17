"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilterInput = void 0;
var CreateFilterInput = (function () {
    function CreateFilterInput() {
    }
    CreateFilterInput.getAttributeTypeMap = function () {
        return CreateFilterInput.attributeTypeMap;
    };
    CreateFilterInput.discriminator = undefined;
    CreateFilterInput.attributeTypeMap = [
        {
            name: 'integrationId',
            baseName: 'integrationId',
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
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'drop',
            baseName: 'drop',
            type: 'boolean',
        },
        {
            name: 'dropProperties',
            baseName: 'dropProperties',
            type: 'Array<string>',
        },
        {
            name: 'allowProperties',
            baseName: 'allowProperties',
            type: 'Array<string>',
        },
    ];
    return CreateFilterInput;
}());
exports.CreateFilterInput = CreateFilterInput;
//# sourceMappingURL=createFilterInput.js.map