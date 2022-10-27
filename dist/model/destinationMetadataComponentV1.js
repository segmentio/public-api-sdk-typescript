"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataComponentV1 = void 0;
var DestinationMetadataComponentV1 = (function () {
    function DestinationMetadataComponentV1() {
    }
    DestinationMetadataComponentV1.getAttributeTypeMap = function () {
        return DestinationMetadataComponentV1.attributeTypeMap;
    };
    DestinationMetadataComponentV1.discriminator = undefined;
    DestinationMetadataComponentV1.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationMetadataComponentV1.TypeEnum',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'owner',
            baseName: 'owner',
            type: 'DestinationMetadataComponentV1.OwnerEnum',
        },
    ];
    return DestinationMetadataComponentV1;
}());
exports.DestinationMetadataComponentV1 = DestinationMetadataComponentV1;
(function (DestinationMetadataComponentV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        TypeEnum[TypeEnum["BROWSER"] = 'BROWSER'] = "BROWSER";
        TypeEnum[TypeEnum["IOS"] = 'IOS'] = "IOS";
        TypeEnum[TypeEnum["SERVER"] = 'SERVER'] = "SERVER";
    })(TypeEnum = DestinationMetadataComponentV1.TypeEnum || (DestinationMetadataComponentV1.TypeEnum = {}));
    var OwnerEnum;
    (function (OwnerEnum) {
        OwnerEnum[OwnerEnum["PARTNER"] = 'PARTNER'] = "PARTNER";
        OwnerEnum[OwnerEnum["SEGMENT"] = 'SEGMENT'] = "SEGMENT";
    })(OwnerEnum = DestinationMetadataComponentV1.OwnerEnum || (DestinationMetadataComponentV1.OwnerEnum = {}));
})(DestinationMetadataComponentV1 = exports.DestinationMetadataComponentV1 || (exports.DestinationMetadataComponentV1 = {}));
exports.DestinationMetadataComponentV1 = DestinationMetadataComponentV1;
//# sourceMappingURL=destinationMetadataComponentV1.js.map