"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesWarehouse1 = void 0;
var ProfilesWarehouse1 = (function () {
    function ProfilesWarehouse1() {
    }
    ProfilesWarehouse1.getAttributeTypeMap = function () {
        return ProfilesWarehouse1.attributeTypeMap;
    };
    ProfilesWarehouse1.discriminator = undefined;
    ProfilesWarehouse1.attributeTypeMap = [
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
    return ProfilesWarehouse1;
}());
exports.ProfilesWarehouse1 = ProfilesWarehouse1;
//# sourceMappingURL=profilesWarehouse1.js.map