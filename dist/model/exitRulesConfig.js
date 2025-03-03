"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitRulesConfig = void 0;
var ExitRulesConfig = (function () {
    function ExitRulesConfig() {
    }
    ExitRulesConfig.getAttributeTypeMap = function () {
        return ExitRulesConfig.attributeTypeMap;
    };
    ExitRulesConfig.discriminator = undefined;
    ExitRulesConfig.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'states',
            baseName: 'states',
            type: 'Array<StatesInner>',
        },
    ];
    return ExitRulesConfig;
}());
exports.ExitRulesConfig = ExitRulesConfig;
//# sourceMappingURL=exitRulesConfig.js.map