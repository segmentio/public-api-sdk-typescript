"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitDefinition = void 0;
var TraitDefinition = (function () {
    function TraitDefinition() {
    }
    TraitDefinition.getAttributeTypeMap = function () {
        return TraitDefinition.attributeTypeMap;
    };
    TraitDefinition.discriminator = undefined;
    TraitDefinition.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return TraitDefinition;
}());
exports.TraitDefinition = TraitDefinition;
//# sourceMappingURL=traitDefinition.js.map