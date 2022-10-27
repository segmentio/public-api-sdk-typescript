"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFunctionV1Input = void 0;
var UpdateFunctionV1Input = (function () {
    function UpdateFunctionV1Input() {
    }
    UpdateFunctionV1Input.getAttributeTypeMap = function () {
        return UpdateFunctionV1Input.attributeTypeMap;
    };
    UpdateFunctionV1Input.discriminator = undefined;
    UpdateFunctionV1Input.attributeTypeMap = [
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'Array<FunctionSettingV1>',
        },
        {
            name: 'displayName',
            baseName: 'displayName',
            type: 'string',
        },
        {
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];
    return UpdateFunctionV1Input;
}());
exports.UpdateFunctionV1Input = UpdateFunctionV1Input;
//# sourceMappingURL=updateFunctionV1Input.js.map