"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceAlpha = void 0;
var SourceAlpha = (function () {
    function SourceAlpha() {
    }
    SourceAlpha.getAttributeTypeMap = function () {
        return SourceAlpha.attributeTypeMap;
    };
    SourceAlpha.discriminator = undefined;
    SourceAlpha.attributeTypeMap = [
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
    return SourceAlpha;
}());
exports.SourceAlpha = SourceAlpha;
//# sourceMappingURL=sourceAlpha.js.map