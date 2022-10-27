"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule2 = void 0;
var Schedule2 = (function () {
    function Schedule2() {
    }
    Schedule2.getAttributeTypeMap = function () {
        return Schedule2.attributeTypeMap;
    };
    Schedule2.discriminator = undefined;
    Schedule2.attributeTypeMap = [
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
    return Schedule2;
}());
exports.Schedule2 = Schedule2;
//# sourceMappingURL=schedule2.js.map