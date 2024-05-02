"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitCreateOptions = void 0;
var TraitCreateOptions = (function () {
    function TraitCreateOptions() {
    }
    TraitCreateOptions.getAttributeTypeMap = function () {
        return TraitCreateOptions.attributeTypeMap;
    };
    TraitCreateOptions.discriminator = undefined;
    TraitCreateOptions.attributeTypeMap = [
        {
            name: 'includeHistorical',
            baseName: 'includeHistorical',
            type: 'boolean',
        },
        {
            name: 'includeAnonymous',
            baseName: 'includeAnonymous',
            type: 'boolean',
        },
    ];
    return TraitCreateOptions;
}());
exports.TraitCreateOptions = TraitCreateOptions;
//# sourceMappingURL=traitCreateOptions.js.map