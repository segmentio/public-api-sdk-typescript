"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var Input = (function () {
    function Input() {
    }
    Input.getAttributeTypeMap = function () {
        return Input.attributeTypeMap;
    };
    Input.discriminator = undefined;
    Input.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'any',
        },
    ];
    return Input;
}());
exports.Input = Input;
//# sourceMappingURL=input.js.map