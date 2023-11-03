"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfilesWarehouseAlphaInput = void 0;
var CreateProfilesWarehouseAlphaInput = (function () {
    function CreateProfilesWarehouseAlphaInput() {
    }
    CreateProfilesWarehouseAlphaInput.getAttributeTypeMap = function () {
        return CreateProfilesWarehouseAlphaInput.attributeTypeMap;
    };
    CreateProfilesWarehouseAlphaInput.discriminator = undefined;
    CreateProfilesWarehouseAlphaInput.attributeTypeMap = [
        {
            name: 'metadataId',
            baseName: 'metadataId',
            type: 'string',
        },
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
        {
            name: 'schemaName',
            baseName: 'schemaName',
            type: 'string',
        },
    ];
    return CreateProfilesWarehouseAlphaInput;
}());
exports.CreateProfilesWarehouseAlphaInput = CreateProfilesWarehouseAlphaInput;
//# sourceMappingURL=createProfilesWarehouseAlphaInput.js.map