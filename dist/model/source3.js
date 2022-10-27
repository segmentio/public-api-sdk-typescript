"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source3 = void 0;
var Source3 = (function () {
    function Source3() {
    }
    Source3.getAttributeTypeMap = function () {
        return Source3.attributeTypeMap;
    };
    Source3.discriminator = undefined;
    Source3.attributeTypeMap = [
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
    return Source3;
}());
exports.Source3 = Source3;
//# sourceMappingURL=source3.js.map