"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceComputationDefinition = void 0;
var AudienceComputationDefinition = (function () {
    function AudienceComputationDefinition() {
    }
    AudienceComputationDefinition.getAttributeTypeMap = function () {
        return AudienceComputationDefinition.attributeTypeMap;
    };
    AudienceComputationDefinition.discriminator = undefined;
    AudienceComputationDefinition.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return AudienceComputationDefinition;
}());
exports.AudienceComputationDefinition = AudienceComputationDefinition;
//# sourceMappingURL=audienceComputationDefinition.js.map