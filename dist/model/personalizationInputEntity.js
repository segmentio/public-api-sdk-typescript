"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationInputEntity = void 0;
var PersonalizationInputEntity = (function () {
    function PersonalizationInputEntity() {
    }
    PersonalizationInputEntity.getAttributeTypeMap = function () {
        return PersonalizationInputEntity.attributeTypeMap;
    };
    PersonalizationInputEntity.discriminator = undefined;
    PersonalizationInputEntity.attributeTypeMap = [
        {
            name: 'properties',
            baseName: 'properties',
            type: 'Array<string>',
        },
        {
            name: 'relationshipSlug',
            baseName: 'relationshipSlug',
            type: 'string',
        },
    ];
    return PersonalizationInputEntity;
}());
exports.PersonalizationInputEntity = PersonalizationInputEntity;
//# sourceMappingURL=personalizationInputEntity.js.map