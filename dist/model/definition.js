"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definition = void 0;
var Definition = (function () {
    function Definition() {
    }
    Definition.getAttributeTypeMap = function () {
        return Definition.attributeTypeMap;
    };
    Definition.discriminator = undefined;
    Definition.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'Definition.TypeEnum',
        },
    ];
    return Definition;
}());
exports.Definition = Definition;
(function (Definition) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        TypeEnum[TypeEnum["USERS"] = 'USERS'] = "USERS";
    })(TypeEnum = Definition.TypeEnum || (Definition.TypeEnum = {}));
})(Definition = exports.Definition || (exports.Definition = {}));
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map