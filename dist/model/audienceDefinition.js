"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceDefinition = void 0;
var AudienceDefinition = (function () {
    function AudienceDefinition() {
    }
    AudienceDefinition.getAttributeTypeMap = function () {
        return AudienceDefinition.attributeTypeMap;
    };
    AudienceDefinition.discriminator = undefined;
    AudienceDefinition.attributeTypeMap = [
        {
            name: 'targetEntity',
            baseName: 'targetEntity',
            type: 'string',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return AudienceDefinition;
}());
exports.AudienceDefinition = AudienceDefinition;
//# sourceMappingURL=audienceDefinition.js.map