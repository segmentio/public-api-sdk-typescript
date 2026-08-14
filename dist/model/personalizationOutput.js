"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationOutput = void 0;
var PersonalizationOutput = (function () {
    function PersonalizationOutput() {
    }
    PersonalizationOutput.getAttributeTypeMap = function () {
        return PersonalizationOutput.attributeTypeMap;
    };
    PersonalizationOutput.discriminator = undefined;
    PersonalizationOutput.attributeTypeMap = [
        {
            name: 'profile',
            baseName: 'profile',
            type: 'Profile1',
        },
        {
            name: 'entities',
            baseName: 'entities',
            type: 'Array<PersonalizationInputEntity>',
        },
        {
            name: 'syncEntityPropertyChanges',
            baseName: 'syncEntityPropertyChanges',
            type: 'boolean',
        },
    ];
    return PersonalizationOutput;
}());
exports.PersonalizationOutput = PersonalizationOutput;
//# sourceMappingURL=personalizationOutput.js.map