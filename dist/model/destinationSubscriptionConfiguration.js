"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationSubscriptionConfiguration = void 0;
var DestinationSubscriptionConfiguration = (function () {
    function DestinationSubscriptionConfiguration() {
    }
    DestinationSubscriptionConfiguration.getAttributeTypeMap = function () {
        return DestinationSubscriptionConfiguration.attributeTypeMap;
    };
    DestinationSubscriptionConfiguration.discriminator = undefined;
    DestinationSubscriptionConfiguration.attributeTypeMap = [
        {
            name: 'actionId',
            baseName: 'actionId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return DestinationSubscriptionConfiguration;
}());
exports.DestinationSubscriptionConfiguration = DestinationSubscriptionConfiguration;
//# sourceMappingURL=destinationSubscriptionConfiguration.js.map