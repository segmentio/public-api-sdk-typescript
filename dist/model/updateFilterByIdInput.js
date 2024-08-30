"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilterByIdInput = void 0;
var UpdateFilterByIdInput = (function () {
    function UpdateFilterByIdInput() {
    }
    UpdateFilterByIdInput.getAttributeTypeMap = function () {
        return UpdateFilterByIdInput.attributeTypeMap;
    };
    UpdateFilterByIdInput.discriminator = undefined;
    UpdateFilterByIdInput.attributeTypeMap = [
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
            name: 'drop',
            baseName: 'drop',
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
            name: 'productArea',
            baseName: 'productArea',
            type: 'string',
        },
        {
            name: 'propertyDrops',
            baseName: 'propertyDrops',
            type: 'Array<string>',
        },
        {
            name: 'allowProperties',
            baseName: 'allowProperties',
            type: 'Array<string>',
        },
    ];
    return UpdateFilterByIdInput;
}());
exports.UpdateFilterByIdInput = UpdateFilterByIdInput;
//# sourceMappingURL=updateFilterByIdInput.js.map