"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source4 = void 0;
var Source4 = (function () {
    function Source4() {
    }
    Source4.getAttributeTypeMap = function () {
        return Source4.attributeTypeMap;
    };
    Source4.discriminator = undefined;
    Source4.attributeTypeMap = [
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
            type: 'Metadata2',
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
    return Source4;
}());
exports.Source4 = Source4;
//# sourceMappingURL=source4.js.map