"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataActionV1 = void 0;
var DestinationMetadataActionV1 = (function () {
    function DestinationMetadataActionV1() {
    }
    DestinationMetadataActionV1.getAttributeTypeMap = function () {
        return DestinationMetadataActionV1.attributeTypeMap;
    };
    DestinationMetadataActionV1.discriminator = undefined;
    DestinationMetadataActionV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'platform',
            baseName: 'platform',
            type: 'DestinationMetadataActionV1.PlatformEnum',
        },
        {
            name: 'hidden',
            baseName: 'hidden',
            type: 'boolean',
        },
        {
            name: 'defaultTrigger',
            baseName: 'defaultTrigger',
            type: 'string',
        },
        {
            name: 'fields',
            baseName: 'fields',
            type: 'Array<DestinationMetadataActionFieldV1>',
        },
    ];
    return DestinationMetadataActionV1;
}());
exports.DestinationMetadataActionV1 = DestinationMetadataActionV1;
(function (DestinationMetadataActionV1) {
    var PlatformEnum;
    (function (PlatformEnum) {
        PlatformEnum[PlatformEnum["CLOUD"] = 'CLOUD'] = "CLOUD";
        PlatformEnum[PlatformEnum["MOBILE"] = 'MOBILE'] = "MOBILE";
        PlatformEnum[PlatformEnum["WEB"] = 'WEB'] = "WEB";
    })(PlatformEnum = DestinationMetadataActionV1.PlatformEnum || (DestinationMetadataActionV1.PlatformEnum = {}));
})(DestinationMetadataActionV1 = exports.DestinationMetadataActionV1 || (exports.DestinationMetadataActionV1 = {}));
exports.DestinationMetadataActionV1 = DestinationMetadataActionV1;
//# sourceMappingURL=destinationMetadataActionV1.js.map