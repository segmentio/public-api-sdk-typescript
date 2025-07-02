"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config1 = void 0;
var Config1 = (function () {
    function Config1() {
    }
    Config1.getAttributeTypeMap = function () {
        return Config1.attributeTypeMap;
    };
    Config1.discriminator = undefined;
    Config1.attributeTypeMap = [
        {
            name: 'interval',
            baseName: 'interval',
            type: 'string',
        },
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
        {
            name: 'spec',
            baseName: 'spec',
            type: 'string',
        },
        {
            name: 'jobId',
            baseName: 'jobId',
            type: 'string',
        },
        {
            name: 'accountId',
            baseName: 'accountId',
            type: 'string',
        },
    ];
    return Config1;
}());
exports.Config1 = Config1;
//# sourceMappingURL=config1.js.map