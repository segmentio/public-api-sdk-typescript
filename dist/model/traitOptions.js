"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitOptions = void 0;
var TraitOptions = (function () {
    function TraitOptions() {
    }
    TraitOptions.getAttributeTypeMap = function () {
        return TraitOptions.attributeTypeMap;
    };
    TraitOptions.discriminator = undefined;
    TraitOptions.attributeTypeMap = [
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'includeAnonymousUsers',
            baseName: 'includeAnonymousUsers',
            type: 'boolean',
        },
    ];
    return TraitOptions;
}());
exports.TraitOptions = TraitOptions;
//# sourceMappingURL=traitOptions.js.map