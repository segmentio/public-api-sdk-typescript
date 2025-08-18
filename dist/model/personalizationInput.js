"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationInput = void 0;
var PersonalizationInput = (function () {
    function PersonalizationInput() {
    }
    PersonalizationInput.getAttributeTypeMap = function () {
        return PersonalizationInput.attributeTypeMap;
    };
    PersonalizationInput.discriminator = undefined;
    PersonalizationInput.attributeTypeMap = [
        {
            name: 'profile',
            baseName: 'profile',
            type: 'Profile',
        },
        {
            name: 'entities',
            baseName: 'entities',
            type: 'Array<PersonalizationInputEntity>',
        },
    ];
    return PersonalizationInput;
}());
exports.PersonalizationInput = PersonalizationInput;
//# sourceMappingURL=personalizationInput.js.map