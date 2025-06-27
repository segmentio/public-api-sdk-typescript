"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificDaysConfig = void 0;
var SpecificDaysConfig = (function () {
    function SpecificDaysConfig() {
    }
    SpecificDaysConfig.getAttributeTypeMap = function () {
        return SpecificDaysConfig.attributeTypeMap;
    };
    SpecificDaysConfig.discriminator = undefined;
    SpecificDaysConfig.attributeTypeMap = [
        {
            name: 'days',
            baseName: 'days',
            type: 'Array<number>',
        },
        {
            name: 'hours',
            baseName: 'hours',
            type: 'Array<number>',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
    ];
    return SpecificDaysConfig;
}());
exports.SpecificDaysConfig = SpecificDaysConfig;
//# sourceMappingURL=specificDaysConfig.js.map