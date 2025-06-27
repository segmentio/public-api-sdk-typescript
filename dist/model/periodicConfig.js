"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodicConfig = void 0;
var PeriodicConfig = (function () {
    function PeriodicConfig() {
    }
    PeriodicConfig.getAttributeTypeMap = function () {
        return PeriodicConfig.attributeTypeMap;
    };
    PeriodicConfig.discriminator = undefined;
    PeriodicConfig.attributeTypeMap = [
        {
            name: 'interval',
            baseName: 'interval',
            type: 'string',
        },
    ];
    return PeriodicConfig;
}());
exports.PeriodicConfig = PeriodicConfig;
//# sourceMappingURL=periodicConfig.js.map