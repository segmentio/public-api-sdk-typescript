"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchQueryMessagingSubscriptionsForSpaceAlphaInput = void 0;
var BatchQueryMessagingSubscriptionsForSpaceAlphaInput = (function () {
    function BatchQueryMessagingSubscriptionsForSpaceAlphaInput() {
    }
    BatchQueryMessagingSubscriptionsForSpaceAlphaInput.getAttributeTypeMap = function () {
        return BatchQueryMessagingSubscriptionsForSpaceAlphaInput.attributeTypeMap;
    };
    BatchQueryMessagingSubscriptionsForSpaceAlphaInput.discriminator = undefined;
    BatchQueryMessagingSubscriptionsForSpaceAlphaInput.attributeTypeMap = [
        {
            name: 'subscriptions',
            baseName: 'subscriptions',
            type: 'Array<GetSubscriptionRequest>',
        },
    ];
    return BatchQueryMessagingSubscriptionsForSpaceAlphaInput;
}());
exports.BatchQueryMessagingSubscriptionsForSpaceAlphaInput = BatchQueryMessagingSubscriptionsForSpaceAlphaInput;
//# sourceMappingURL=batchQueryMessagingSubscriptionsForSpaceAlphaInput.js.map