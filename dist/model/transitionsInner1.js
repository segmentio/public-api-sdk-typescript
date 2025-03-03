"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionsInner1 = void 0;
var TransitionsInner1 = (function () {
    function TransitionsInner1() {
    }
    TransitionsInner1.getAttributeTypeMap = function () {
        return TransitionsInner1.attributeTypeMap;
    };
    TransitionsInner1.discriminator = undefined;
    TransitionsInner1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TransitionsInner1.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
    ];
    return TransitionsInner1;
}());
exports.TransitionsInner1 = TransitionsInner1;
(function (TransitionsInner1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["CONDITION"] = 'CONDITION'] = "CONDITION";
        TypeEnum[TypeEnum["TIMEOUT"] = 'TIMEOUT'] = "TIMEOUT";
        TypeEnum[TypeEnum["DEFAULT"] = 'DEFAULT'] = "DEFAULT";
    })(TypeEnum = TransitionsInner1.TypeEnum || (TransitionsInner1.TypeEnum = {}));
})(TransitionsInner1 = exports.TransitionsInner1 || (exports.TransitionsInner1 = {}));
exports.TransitionsInner1 = TransitionsInner1;
//# sourceMappingURL=transitionsInner1.js.map