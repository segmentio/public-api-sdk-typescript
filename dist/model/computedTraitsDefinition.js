"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedTraitsDefinition = void 0;
var ComputedTraitsDefinition = (function () {
    function ComputedTraitsDefinition() {
    }
    ComputedTraitsDefinition.getAttributeTypeMap = function () {
        return ComputedTraitsDefinition.attributeTypeMap;
    };
    ComputedTraitsDefinition.discriminator = undefined;
    ComputedTraitsDefinition.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];
    return ComputedTraitsDefinition;
}());
exports.ComputedTraitsDefinition = ComputedTraitsDefinition;
//# sourceMappingURL=computedTraitsDefinition.js.map