"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceDefinitionBeta = void 0;
var AudienceDefinitionBeta = (function () {
    function AudienceDefinitionBeta() {
    }
    AudienceDefinitionBeta.getAttributeTypeMap = function () {
        return AudienceDefinitionBeta.attributeTypeMap;
    };
    AudienceDefinitionBeta.discriminator = undefined;
    AudienceDefinitionBeta.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceDefinitionBeta.TypeEnum',
        },
    ];
    return AudienceDefinitionBeta;
}());
exports.AudienceDefinitionBeta = AudienceDefinitionBeta;
(function (AudienceDefinitionBeta) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        TypeEnum[TypeEnum["USERS"] = 'USERS'] = "USERS";
    })(TypeEnum = AudienceDefinitionBeta.TypeEnum || (AudienceDefinitionBeta.TypeEnum = {}));
})(AudienceDefinitionBeta = exports.AudienceDefinitionBeta || (exports.AudienceDefinitionBeta = {}));
exports.AudienceDefinitionBeta = AudienceDefinitionBeta;
//# sourceMappingURL=audienceDefinitionBeta.js.map