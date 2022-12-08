"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
var Metadata = (function () {
    function Metadata() {
    }
    Metadata.getAttributeTypeMap = function () {
        return Metadata.attributeTypeMap;
    };
    Metadata.discriminator = undefined;
    Metadata.attributeTypeMap = [
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
            type: 'Metadata.StatusEnum',
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
    ];
    return Metadata;
}());
exports.Metadata = Metadata;
(function (Metadata) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DEPRECATED"] = 'DEPRECATED'] = "DEPRECATED";
        StatusEnum[StatusEnum["PRIVATE_BETA"] = 'PRIVATE_BETA'] = "PRIVATE_BETA";
        StatusEnum[StatusEnum["PRIVATE_BUILDING"] = 'PRIVATE_BUILDING'] = "PRIVATE_BUILDING";
        StatusEnum[StatusEnum["PRIVATE_SUBMITTED"] = 'PRIVATE_SUBMITTED'] = "PRIVATE_SUBMITTED";
        StatusEnum[StatusEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        StatusEnum[StatusEnum["PUBLIC_BETA"] = 'PUBLIC_BETA'] = "PUBLIC_BETA";
        StatusEnum[StatusEnum["UNAVAILABLE"] = 'UNAVAILABLE'] = "UNAVAILABLE";
    })(StatusEnum = Metadata.StatusEnum || (Metadata.StatusEnum = {}));
})(Metadata = exports.Metadata || (exports.Metadata = {}));
exports.Metadata = Metadata;
//# sourceMappingURL=metadata.js.map