"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSourceV1Input = void 0;
var UpdateSourceV1Input = (function () {
    function UpdateSourceV1Input() {
    }
    UpdateSourceV1Input.getAttributeTypeMap = function () {
        return UpdateSourceV1Input.attributeTypeMap;
    };
    UpdateSourceV1Input.discriminator = undefined;
    UpdateSourceV1Input.attributeTypeMap = [
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
            type: 'any',
        },
    ];
    return UpdateSourceV1Input;
}());
exports.UpdateSourceV1Input = UpdateSourceV1Input;
//# sourceMappingURL=updateSourceV1Input.js.map