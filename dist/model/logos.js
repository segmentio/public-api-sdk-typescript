"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logos = void 0;
var Logos = (function () {
    function Logos() {
    }
    Logos.getAttributeTypeMap = function () {
        return Logos.attributeTypeMap;
    };
    Logos.discriminator = undefined;
    Logos.attributeTypeMap = [
        {
            name: 'default',
            baseName: 'default',
            type: 'string',
        },
        {
            name: 'mark',
            baseName: 'mark',
            type: 'string',
        },
        {
            name: 'alt',
            baseName: 'alt',
            type: 'string',
        },
    ];
    return Logos;
}());
exports.Logos = Logos;
//# sourceMappingURL=logos.js.map