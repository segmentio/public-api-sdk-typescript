"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWarehouseV2Input = void 0;
var UpdateWarehouseV2Input = (function () {
    function UpdateWarehouseV2Input() {
    }
    UpdateWarehouseV2Input.getAttributeTypeMap = function () {
        return UpdateWarehouseV2Input.attributeTypeMap;
    };
    UpdateWarehouseV2Input.discriminator = undefined;
    UpdateWarehouseV2Input.attributeTypeMap = [
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
            name: 'credentialId',
            baseName: 'credentialId',
            type: 'string',
        },
    ];
    return UpdateWarehouseV2Input;
}());
exports.UpdateWarehouseV2Input = UpdateWarehouseV2Input;
//# sourceMappingURL=updateWarehouseV2Input.js.map