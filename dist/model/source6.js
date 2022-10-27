"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source6 = void 0;
var Source6 = (function () {
    function Source6() {
    }
    Source6.getAttributeTypeMap = function () {
        return Source6.attributeTypeMap;
    };
    Source6.discriminator = undefined;
    Source6.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
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
            name: 'writeKeys',
            baseName: 'writeKeys',
            type: 'Array<string>',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'any',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<LabelV1>',
        },
    ];
    return Source6;
}());
exports.Source6 = Source6;
//# sourceMappingURL=source6.js.map