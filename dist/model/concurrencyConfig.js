"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrencyConfig = void 0;
var ConcurrencyConfig = (function () {
    function ConcurrencyConfig() {
    }
    ConcurrencyConfig.getAttributeTypeMap = function () {
        return ConcurrencyConfig.attributeTypeMap;
    };
    ConcurrencyConfig.discriminator = undefined;
    ConcurrencyConfig.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'concurrencyKey',
            baseName: 'concurrencyKey',
            type: 'string',
        },
    ];
    return ConcurrencyConfig;
}());
exports.ConcurrencyConfig = ConcurrencyConfig;
//# sourceMappingURL=concurrencyConfig.js.map