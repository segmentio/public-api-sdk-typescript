"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSourceAlphaInput = void 0;
var UpdateSourceAlphaInput = (function () {
    function UpdateSourceAlphaInput() {
    }
    UpdateSourceAlphaInput.getAttributeTypeMap = function () {
        return UpdateSourceAlphaInput.attributeTypeMap;
    };
    UpdateSourceAlphaInput.discriminator = undefined;
    UpdateSourceAlphaInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return UpdateSourceAlphaInput;
}());
exports.UpdateSourceAlphaInput = UpdateSourceAlphaInput;
//# sourceMappingURL=updateSourceAlphaInput.js.map