"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesWarehouseAlpha = void 0;
var ProfilesWarehouseAlpha = (function () {
    function ProfilesWarehouseAlpha() {
    }
    ProfilesWarehouseAlpha.getAttributeTypeMap = function () {
        return ProfilesWarehouseAlpha.attributeTypeMap;
    };
    ProfilesWarehouseAlpha.discriminator = undefined;
    ProfilesWarehouseAlpha.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'Metadata1',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
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
        {
            name: 'schemaName',
            baseName: 'schemaName',
            type: 'string',
        },
    ];
    return ProfilesWarehouseAlpha;
}());
exports.ProfilesWarehouseAlpha = ProfilesWarehouseAlpha;
//# sourceMappingURL=profilesWarehouseAlpha.js.map