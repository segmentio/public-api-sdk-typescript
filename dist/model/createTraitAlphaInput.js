"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTraitAlphaInput = void 0;
var CreateTraitAlphaInput = (function () {
    function CreateTraitAlphaInput() {
    }
    CreateTraitAlphaInput.getAttributeTypeMap = function () {
        return CreateTraitAlphaInput.attributeTypeMap;
    };
    CreateTraitAlphaInput.discriminator = undefined;
    CreateTraitAlphaInput.attributeTypeMap = [
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
    return CreateTraitAlphaInput;
}());
exports.CreateTraitAlphaInput = CreateTraitAlphaInput;
//# sourceMappingURL=createTraitAlphaInput.js.map