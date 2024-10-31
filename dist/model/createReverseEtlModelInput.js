"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReverseEtlModelInput = void 0;
var CreateReverseEtlModelInput = (function () {
    function CreateReverseEtlModelInput() {
    }
    CreateReverseEtlModelInput.getAttributeTypeMap = function () {
        return CreateReverseEtlModelInput.attributeTypeMap;
    };
    CreateReverseEtlModelInput.discriminator = undefined;
    CreateReverseEtlModelInput.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
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
    return CreateReverseEtlModelInput;
}());
exports.CreateReverseEtlModelInput = CreateReverseEtlModelInput;
//# sourceMappingURL=createReverseEtlModelInput.js.map