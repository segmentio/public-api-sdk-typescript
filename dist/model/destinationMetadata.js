"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadata = void 0;
var DestinationMetadata = (function () {
    function DestinationMetadata() {
    }
    DestinationMetadata.getAttributeTypeMap = function () {
        return DestinationMetadata.attributeTypeMap;
    };
    DestinationMetadata.discriminator = undefined;
    DestinationMetadata.attributeTypeMap = [
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
            type: 'Logos',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'DestinationMetadata.StatusEnum',
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
            type: 'SupportedFeatures',
        },
        {
            name: 'supportedMethods',
            baseName: 'supportedMethods',
            type: 'SupportedMethods',
        },
        {
            name: 'supportedPlatforms',
            baseName: 'supportedPlatforms',
            type: 'SupportedPlatforms',
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
    ];
    return DestinationMetadata;
}());
exports.DestinationMetadata = DestinationMetadata;
(function (DestinationMetadata) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DEPRECATED"] = 'DEPRECATED'] = "DEPRECATED";
        StatusEnum[StatusEnum["PRIVATE_BETA"] = 'PRIVATE_BETA'] = "PRIVATE_BETA";
        StatusEnum[StatusEnum["PRIVATE_BUILDING"] = 'PRIVATE_BUILDING'] = "PRIVATE_BUILDING";
        StatusEnum[StatusEnum["PRIVATE_SUBMITTED"] = 'PRIVATE_SUBMITTED'] = "PRIVATE_SUBMITTED";
        StatusEnum[StatusEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        StatusEnum[StatusEnum["PUBLIC_BETA"] = 'PUBLIC_BETA'] = "PUBLIC_BETA";
        StatusEnum[StatusEnum["UNAVAILABLE"] = 'UNAVAILABLE'] = "UNAVAILABLE";
    })(StatusEnum = DestinationMetadata.StatusEnum || (DestinationMetadata.StatusEnum = {}));
})(DestinationMetadata = exports.DestinationMetadata || (exports.DestinationMetadata = {}));
exports.DestinationMetadata = DestinationMetadata;
//# sourceMappingURL=destinationMetadata.js.map