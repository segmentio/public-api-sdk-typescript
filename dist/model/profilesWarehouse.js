"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesWarehouse = void 0;
var ProfilesWarehouse = (function () {
    function ProfilesWarehouse() {
    }
    ProfilesWarehouse.getAttributeTypeMap = function () {
        return ProfilesWarehouse.attributeTypeMap;
    };
    ProfilesWarehouse.discriminator = undefined;
    ProfilesWarehouse.attributeTypeMap = [
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
    return ProfilesWarehouse;
}());
exports.ProfilesWarehouse = ProfilesWarehouse;
//# sourceMappingURL=profilesWarehouse.js.map