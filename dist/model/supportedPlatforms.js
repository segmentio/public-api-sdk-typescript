"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedPlatforms = void 0;
var SupportedPlatforms = (function () {
    function SupportedPlatforms() {
    }
    SupportedPlatforms.getAttributeTypeMap = function () {
        return SupportedPlatforms.attributeTypeMap;
    };
    SupportedPlatforms.discriminator = undefined;
    SupportedPlatforms.attributeTypeMap = [
        {
            name: 'browser',
            baseName: 'browser',
            type: 'boolean',
        },
        {
            name: 'server',
            baseName: 'server',
            type: 'boolean',
        },
        {
            name: 'mobile',
            baseName: 'mobile',
            type: 'boolean',
        },
    ];
    return SupportedPlatforms;
}());
exports.SupportedPlatforms = SupportedPlatforms;
//# sourceMappingURL=supportedPlatforms.js.map