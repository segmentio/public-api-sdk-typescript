"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputedTraitAlphaInput = void 0;
var CreateComputedTraitAlphaInput = (function () {
    function CreateComputedTraitAlphaInput() {
    }
    CreateComputedTraitAlphaInput.getAttributeTypeMap = function () {
        return CreateComputedTraitAlphaInput.attributeTypeMap;
    };
    CreateComputedTraitAlphaInput.discriminator = undefined;
    CreateComputedTraitAlphaInput.attributeTypeMap = [
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
    return CreateComputedTraitAlphaInput;
}());
exports.CreateComputedTraitAlphaInput = CreateComputedTraitAlphaInput;
//# sourceMappingURL=createComputedTraitAlphaInput.js.map