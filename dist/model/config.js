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
    ];
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map