"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWarehouseV1Input = void 0;
var UpdateWarehouseV1Input = (function () {
    function UpdateWarehouseV1Input() {
    }
    UpdateWarehouseV1Input.getAttributeTypeMap = function () {
        return UpdateWarehouseV1Input.attributeTypeMap;
    };
    UpdateWarehouseV1Input.discriminator = undefined;
    UpdateWarehouseV1Input.attributeTypeMap = [
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return UpdateWarehouseV1Input;
}());
exports.UpdateWarehouseV1Input = UpdateWarehouseV1Input;
//# sourceMappingURL=updateWarehouseV1Input.js.map