"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputedTraitForSpaceAlphaInput = void 0;
var UpdateComputedTraitForSpaceAlphaInput = (function () {
    function UpdateComputedTraitForSpaceAlphaInput() {
    }
    UpdateComputedTraitForSpaceAlphaInput.getAttributeTypeMap = function () {
        return UpdateComputedTraitForSpaceAlphaInput.attributeTypeMap;
    };
    UpdateComputedTraitForSpaceAlphaInput.discriminator = undefined;
    UpdateComputedTraitForSpaceAlphaInput.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'TraitDefinition',
        },
    ];
    return UpdateComputedTraitForSpaceAlphaInput;
}());
exports.UpdateComputedTraitForSpaceAlphaInput = UpdateComputedTraitForSpaceAlphaInput;
//# sourceMappingURL=updateComputedTraitForSpaceAlphaInput.js.map