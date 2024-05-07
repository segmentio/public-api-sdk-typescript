"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitDefinition = void 0;
var TraitDefinition = (function () {
    function TraitDefinition() {
    }
    TraitDefinition.getAttributeTypeMap = function () {
        return TraitDefinition.attributeTypeMap;
    };
    TraitDefinition.discriminator = undefined;
    TraitDefinition.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TraitDefinition.TypeEnum',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return TraitDefinition;
}());
exports.TraitDefinition = TraitDefinition;
(function (TraitDefinition) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["accounts"] = 'accounts'] = "accounts";
        TypeEnum[TypeEnum["users"] = 'users'] = "users";
    })(TypeEnum = TraitDefinition.TypeEnum || (TraitDefinition.TypeEnum = {}));
})(TraitDefinition = exports.TraitDefinition || (exports.TraitDefinition = {}));
exports.TraitDefinition = TraitDefinition;
//# sourceMappingURL=traitDefinition.js.map