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
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceDefinition.TypeEnum',
        },
    ];
    return AudienceDefinition;
}());
exports.AudienceDefinition = AudienceDefinition;
(function (AudienceDefinition) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["accounts"] = 'accounts'] = "accounts";
        TypeEnum[TypeEnum["users"] = 'users'] = "users";
    })(TypeEnum = AudienceDefinition.TypeEnum || (AudienceDefinition.TypeEnum = {}));
})(AudienceDefinition = exports.AudienceDefinition || (exports.AudienceDefinition = {}));
exports.AudienceDefinition = AudienceDefinition;
//# sourceMappingURL=audienceDefinition.js.map