"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDSyncConfig = void 0;
var IDSyncConfig = (function () {
    function IDSyncConfig() {
    }
    IDSyncConfig.getAttributeTypeMap = function () {
        return IDSyncConfig.attributeTypeMap;
    };
    IDSyncConfig.discriminator = undefined;
    IDSyncConfig.attributeTypeMap = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'string',
        },
        {
            name: 'mapTo',
            baseName: 'mapTo',
            type: 'string',
        },
    ];
    return IDSyncConfig;
}());
exports.IDSyncConfig = IDSyncConfig;
//# sourceMappingURL=iDSyncConfig.js.map