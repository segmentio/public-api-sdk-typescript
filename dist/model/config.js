"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config = (function () {
    function Config() {
    }
    Config.getAttributeTypeMap = function () {
        return Config.attributeTypeMap;
    };
    Config.discriminator = undefined;
    Config.attributeTypeMap = [
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
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map