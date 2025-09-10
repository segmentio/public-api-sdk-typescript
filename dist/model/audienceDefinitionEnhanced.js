"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceDefinitionEnhanced = void 0;
var AudienceDefinitionEnhanced = (function () {
    function AudienceDefinitionEnhanced() {
    }
    AudienceDefinitionEnhanced.getAttributeTypeMap = function () {
        return AudienceDefinitionEnhanced.attributeTypeMap;
    };
    AudienceDefinitionEnhanced.discriminator = undefined;
    AudienceDefinitionEnhanced.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceDefinitionEnhanced.TypeEnum',
        },
        {
            name: 'targetEntity',
            baseName: 'targetEntity',
            type: 'string',
        },
        {
            name: 'conditions',
            baseName: 'conditions',
            type: 'Array<AudienceConditionsWrapper>',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return AudienceDefinitionEnhanced;
}());
exports.AudienceDefinitionEnhanced = AudienceDefinitionEnhanced;
(function (AudienceDefinitionEnhanced) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        TypeEnum[TypeEnum["USERS"] = 'USERS'] = "USERS";
    })(TypeEnum = AudienceDefinitionEnhanced.TypeEnum || (AudienceDefinitionEnhanced.TypeEnum = {}));
})(AudienceDefinitionEnhanced = exports.AudienceDefinitionEnhanced || (exports.AudienceDefinitionEnhanced = {}));
exports.AudienceDefinitionEnhanced = AudienceDefinitionEnhanced;
//# sourceMappingURL=audienceDefinitionEnhanced.js.map