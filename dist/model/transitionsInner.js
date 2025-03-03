"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionsInner = void 0;
var TransitionsInner = (function () {
    function TransitionsInner() {
    }
    TransitionsInner.getAttributeTypeMap = function () {
        return TransitionsInner.attributeTypeMap;
    };
    TransitionsInner.discriminator = undefined;
    TransitionsInner.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TransitionsInner.TypeEnum',
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
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
    ];
    return TransitionsInner;
}());
exports.TransitionsInner = TransitionsInner;
(function (TransitionsInner) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["CONDITION"] = 'CONDITION'] = "CONDITION";
        TypeEnum[TypeEnum["TIMEOUT"] = 'TIMEOUT'] = "TIMEOUT";
    })(TypeEnum = TransitionsInner.TypeEnum || (TransitionsInner.TypeEnum = {}));
})(TransitionsInner = exports.TransitionsInner || (exports.TransitionsInner = {}));
exports.TransitionsInner = TransitionsInner;
//# sourceMappingURL=transitionsInner.js.map