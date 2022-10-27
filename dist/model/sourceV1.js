"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceV1 = void 0;
var SourceV1 = (function () {
    function SourceV1() {
    }
    SourceV1.getAttributeTypeMap = function () {
        return SourceV1.attributeTypeMap;
    };
    SourceV1.discriminator = undefined;
    SourceV1.attributeTypeMap = [
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
    return SourceV1;
}());
exports.SourceV1 = SourceV1;
//# sourceMappingURL=sourceV1.js.map