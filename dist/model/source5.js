"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source5 = void 0;
var Source5 = (function () {
    function Source5() {
    }
    Source5.getAttributeTypeMap = function () {
        return Source5.attributeTypeMap;
    };
    Source5.discriminator = undefined;
    Source5.attributeTypeMap = [
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
    return Source5;
}());
exports.Source5 = Source5;
//# sourceMappingURL=source5.js.map