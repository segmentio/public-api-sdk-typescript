"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReverseEtlModelInput = void 0;
var UpdateReverseEtlModelInput = (function () {
    function UpdateReverseEtlModelInput() {
    }
    UpdateReverseEtlModelInput.getAttributeTypeMap = function () {
        return UpdateReverseEtlModelInput.attributeTypeMap;
    };
    UpdateReverseEtlModelInput.discriminator = undefined;
    UpdateReverseEtlModelInput.attributeTypeMap = [
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
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'queryIdentifierColumn',
            baseName: 'queryIdentifierColumn',
            type: 'string',
        },
    ];
    return UpdateReverseEtlModelInput;
}());
exports.UpdateReverseEtlModelInput = UpdateReverseEtlModelInput;
//# sourceMappingURL=updateReverseEtlModelInput.js.map