"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataV1 = void 0;
var DestinationMetadataV1 = (function () {
    function DestinationMetadataV1() {
    }
    DestinationMetadataV1.getAttributeTypeMap = function () {
        return DestinationMetadataV1.attributeTypeMap;
    };
    DestinationMetadataV1.discriminator = undefined;
    DestinationMetadataV1.attributeTypeMap = [
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
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
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
            name: 'status',
            baseName: 'status',
            type: 'DestinationMetadataV1.StatusEnum',
        },
        {
            name: 'previousNames',
            baseName: 'previousNames',
            type: 'Array<string>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'website',
            baseName: 'website',
            type: 'string',
        },
        {
            name: 'components',
            baseName: 'components',
            type: 'Array<DestinationMetadataComponentV1>',
        },
        {
            name: 'supportedFeatures',
            baseName: 'supportedFeatures',
            type: 'DestinationMetadataFeaturesV1',
        },
        {
            name: 'supportedMethods',
            baseName: 'supportedMethods',
            type: 'DestinationMetadataMethodsV1',
        },
        {
            name: 'supportedPlatforms',
            baseName: 'supportedPlatforms',
            type: 'DestinationMetadataPlatformsV1',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationMetadataActionV1>',
        },
        {
            name: 'presets',
            baseName: 'presets',
            type: 'Array<DestinationMetadataSubscriptionPresetV1>',
        },
        {
            name: 'contacts',
            baseName: 'contacts',
            type: 'Array<Contact>',
        },
        {
            name: 'partnerOwned',
            baseName: 'partnerOwned',
            type: 'boolean',
        },
        {
            name: 'supportedRegions',
            baseName: 'supportedRegions',
            type: 'Array<string>',
        },
        {
            name: 'regionEndpoints',
            baseName: 'regionEndpoints',
            type: 'Array<string>',
        },
        {
            name: 'multiInstanceSupportedVersion',
            baseName: 'multiInstanceSupportedVersion',
            type: 'string',
        },
    ];
    return DestinationMetadataV1;
}());
exports.DestinationMetadataV1 = DestinationMetadataV1;
(function (DestinationMetadataV1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DEPRECATED"] = 'DEPRECATED'] = "DEPRECATED";
        StatusEnum[StatusEnum["PRIVATE_BETA"] = 'PRIVATE_BETA'] = "PRIVATE_BETA";
        StatusEnum[StatusEnum["PRIVATE_BUILDING"] = 'PRIVATE_BUILDING'] = "PRIVATE_BUILDING";
        StatusEnum[StatusEnum["PRIVATE_SUBMITTED"] = 'PRIVATE_SUBMITTED'] = "PRIVATE_SUBMITTED";
        StatusEnum[StatusEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        StatusEnum[StatusEnum["PUBLIC_BETA"] = 'PUBLIC_BETA'] = "PUBLIC_BETA";
        StatusEnum[StatusEnum["UNAVAILABLE"] = 'UNAVAILABLE'] = "UNAVAILABLE";
    })(StatusEnum = DestinationMetadataV1.StatusEnum || (DestinationMetadataV1.StatusEnum = {}));
})(DestinationMetadataV1 = exports.DestinationMetadataV1 || (exports.DestinationMetadataV1 = {}));
exports.DestinationMetadataV1 = DestinationMetadataV1;
//# sourceMappingURL=destinationMetadataV1.js.map