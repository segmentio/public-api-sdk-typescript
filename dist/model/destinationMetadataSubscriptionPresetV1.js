"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataSubscriptionPresetV1 = void 0;
var DestinationMetadataSubscriptionPresetV1 = (function () {
    function DestinationMetadataSubscriptionPresetV1() {
    }
    DestinationMetadataSubscriptionPresetV1.getAttributeTypeMap = function () {
        return DestinationMetadataSubscriptionPresetV1.attributeTypeMap;
    };
    DestinationMetadataSubscriptionPresetV1.discriminator = undefined;
    DestinationMetadataSubscriptionPresetV1.attributeTypeMap = [
        {
            name: 'actionId',
            baseName: 'actionId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'fields',
            baseName: 'fields',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
    ];
    return DestinationMetadataSubscriptionPresetV1;
}());
exports.DestinationMetadataSubscriptionPresetV1 = DestinationMetadataSubscriptionPresetV1;
//# sourceMappingURL=destinationMetadataSubscriptionPresetV1.js.map