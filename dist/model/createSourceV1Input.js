"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceV1Input = void 0;
var CreateSourceV1Input = (function () {
    function CreateSourceV1Input() {
    }
    CreateSourceV1Input.getAttributeTypeMap = function () {
        return CreateSourceV1Input.attributeTypeMap;
    };
    CreateSourceV1Input.discriminator = undefined;
    CreateSourceV1Input.attributeTypeMap = [
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'metadataId',
            baseName: 'metadataId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'any',
        },
    ];
    return CreateSourceV1Input;
}());
exports.CreateSourceV1Input = CreateSourceV1Input;
//# sourceMappingURL=createSourceV1Input.js.map