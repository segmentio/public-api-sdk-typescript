"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInsertFunctionInstanceAlphaInput = void 0;
var UpdateInsertFunctionInstanceAlphaInput = (function () {
    function UpdateInsertFunctionInstanceAlphaInput() {
    }
    UpdateInsertFunctionInstanceAlphaInput.getAttributeTypeMap = function () {
        return UpdateInsertFunctionInstanceAlphaInput.attributeTypeMap;
    };
    UpdateInsertFunctionInstanceAlphaInput.discriminator = undefined;
    UpdateInsertFunctionInstanceAlphaInput.attributeTypeMap = [
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return UpdateInsertFunctionInstanceAlphaInput;
}());
exports.UpdateInsertFunctionInstanceAlphaInput = UpdateInsertFunctionInstanceAlphaInput;
//# sourceMappingURL=updateInsertFunctionInstanceAlphaInput.js.map