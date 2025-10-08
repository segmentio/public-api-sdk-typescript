"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivePluginsAlpha = void 0;
var LivePluginsAlpha = (function () {
    function LivePluginsAlpha() {
    }
    LivePluginsAlpha.getAttributeTypeMap = function () {
        return LivePluginsAlpha.attributeTypeMap;
    };
    LivePluginsAlpha.discriminator = undefined;
    LivePluginsAlpha.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'downloadURL',
            baseName: 'downloadURL',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
    ];
    return LivePluginsAlpha;
}());
exports.LivePluginsAlpha = LivePluginsAlpha;
//# sourceMappingURL=livePluginsAlpha.js.map