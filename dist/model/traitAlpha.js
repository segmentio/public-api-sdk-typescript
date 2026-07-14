"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitAlpha = void 0;
var TraitAlpha = (function () {
    function TraitAlpha() {
    }
    TraitAlpha.getAttributeTypeMap = function () {
        return TraitAlpha.attributeTypeMap;
    };
    TraitAlpha.discriminator = undefined;
    TraitAlpha.attributeTypeMap = [
        {
            name: 'trait',
            baseName: 'trait',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'TraitType',
        },
        {
            name: 'lastSeenAt',
            baseName: 'lastSeenAt',
            type: 'string',
        },
        {
            name: 'samples',
            baseName: 'samples',
            type: 'Array<string>',
        },
    ];
    return TraitAlpha;
}());
exports.TraitAlpha = TraitAlpha;
//# sourceMappingURL=traitAlpha.js.map