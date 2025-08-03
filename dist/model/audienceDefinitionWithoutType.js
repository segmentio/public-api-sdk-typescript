"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceDefinitionWithoutType = void 0;
var AudienceDefinitionWithoutType = (function () {
    function AudienceDefinitionWithoutType() {
    }
    AudienceDefinitionWithoutType.getAttributeTypeMap = function () {
        return AudienceDefinitionWithoutType.attributeTypeMap;
    };
    AudienceDefinitionWithoutType.discriminator = undefined;
    AudienceDefinitionWithoutType.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'targetEntity',
            baseName: 'targetEntity',
            type: 'string',
        },
    ];
    return AudienceDefinitionWithoutType;
}());
exports.AudienceDefinitionWithoutType = AudienceDefinitionWithoutType;
//# sourceMappingURL=audienceDefinitionWithoutType.js.map