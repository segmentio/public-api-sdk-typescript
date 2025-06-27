"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceSize = void 0;
var AudienceSize = (function () {
    function AudienceSize() {
    }
    AudienceSize.getAttributeTypeMap = function () {
        return AudienceSize.attributeTypeMap;
    };
    AudienceSize.discriminator = undefined;
    AudienceSize.attributeTypeMap = [
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceSize.TypeEnum',
        },
    ];
    return AudienceSize;
}());
exports.AudienceSize = AudienceSize;
(function (AudienceSize) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        TypeEnum[TypeEnum["USERS"] = 'USERS'] = "USERS";
    })(TypeEnum = AudienceSize.TypeEnum || (AudienceSize.TypeEnum = {}));
})(AudienceSize = exports.AudienceSize || (exports.AudienceSize = {}));
exports.AudienceSize = AudienceSize;
//# sourceMappingURL=audienceSize.js.map