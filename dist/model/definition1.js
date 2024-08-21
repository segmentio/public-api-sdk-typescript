"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definition1 = void 0;
var Definition1 = (function () {
    function Definition1() {
    }
    Definition1.getAttributeTypeMap = function () {
        return Definition1.attributeTypeMap;
    };
    Definition1.discriminator = undefined;
    Definition1.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'Definition1.TypeEnum',
        },
    ];
    return Definition1;
}());
exports.Definition1 = Definition1;
(function (Definition1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        TypeEnum[TypeEnum["USERS"] = 'USERS'] = "USERS";
    })(TypeEnum = Definition1.TypeEnum || (Definition1.TypeEnum = {}));
})(Definition1 = exports.Definition1 || (exports.Definition1 = {}));
exports.Definition1 = Definition1;
//# sourceMappingURL=definition1.js.map