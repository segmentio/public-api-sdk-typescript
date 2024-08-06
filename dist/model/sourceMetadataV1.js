"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMetadataV1 = void 0;
var SourceMetadataV1 = (function () {
    function SourceMetadataV1() {
    }
    SourceMetadataV1.getAttributeTypeMap = function () {
        return SourceMetadataV1.attributeTypeMap;
    };
    SourceMetadataV1.discriminator = undefined;
    SourceMetadataV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logos',
            baseName: 'logos',
            type: 'LogosBeta',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'isCloudEventSource',
            baseName: 'isCloudEventSource',
            type: 'boolean',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'SourceMetadataV1.StatusEnum',
        },
        {
            name: 'partnerOwned',
            baseName: 'partnerOwned',
            type: 'boolean',
        },
    ];
    return SourceMetadataV1;
}());
exports.SourceMetadataV1 = SourceMetadataV1;
(function (SourceMetadataV1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DEPRECATED"] = 'DEPRECATED'] = "DEPRECATED";
        StatusEnum[StatusEnum["PRIVATE_BETA"] = 'PRIVATE_BETA'] = "PRIVATE_BETA";
        StatusEnum[StatusEnum["PRIVATE_BUILDING"] = 'PRIVATE_BUILDING'] = "PRIVATE_BUILDING";
        StatusEnum[StatusEnum["PRIVATE_SUBMITTED"] = 'PRIVATE_SUBMITTED'] = "PRIVATE_SUBMITTED";
        StatusEnum[StatusEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        StatusEnum[StatusEnum["PUBLIC_BETA"] = 'PUBLIC_BETA'] = "PUBLIC_BETA";
        StatusEnum[StatusEnum["UNAVAILABLE"] = 'UNAVAILABLE'] = "UNAVAILABLE";
    })(StatusEnum = SourceMetadataV1.StatusEnum || (SourceMetadataV1.StatusEnum = {}));
})(SourceMetadataV1 = exports.SourceMetadataV1 || (exports.SourceMetadataV1 = {}));
exports.SourceMetadataV1 = SourceMetadataV1;
//# sourceMappingURL=sourceMetadataV1.js.map