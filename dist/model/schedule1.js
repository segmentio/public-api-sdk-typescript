"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule1 = void 0;
var Schedule1 = (function () {
    function Schedule1() {
    }
    Schedule1.getAttributeTypeMap = function () {
        return Schedule1.attributeTypeMap;
    };
    Schedule1.discriminator = undefined;
    Schedule1.attributeTypeMap = [
        {
            name: 'times',
            baseName: 'times',
            type: 'Array<WarehouseAdvancedSyncV1>',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
    ];
    return Schedule1;
}());
exports.Schedule1 = Schedule1;
//# sourceMappingURL=schedule1.js.map