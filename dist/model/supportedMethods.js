"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedMethods = void 0;
var SupportedMethods = (function () {
    function SupportedMethods() {
    }
    SupportedMethods.getAttributeTypeMap = function () {
        return SupportedMethods.attributeTypeMap;
    };
    SupportedMethods.discriminator = undefined;
    SupportedMethods.attributeTypeMap = [
        {
            name: 'pageview',
            baseName: 'pageview',
            type: 'boolean',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'boolean',
        },
        {
            name: 'alias',
            baseName: 'alias',
            type: 'boolean',
        },
        {
            name: 'track',
            baseName: 'track',
            type: 'boolean',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'boolean',
        },
    ];
    return SupportedMethods;
}());
exports.SupportedMethods = SupportedMethods;
//# sourceMappingURL=supportedMethods.js.map