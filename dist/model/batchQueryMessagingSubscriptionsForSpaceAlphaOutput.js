"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchQueryMessagingSubscriptionsForSpaceAlphaOutput = void 0;
var BatchQueryMessagingSubscriptionsForSpaceAlphaOutput = (function () {
    function BatchQueryMessagingSubscriptionsForSpaceAlphaOutput() {
    }
    BatchQueryMessagingSubscriptionsForSpaceAlphaOutput.getAttributeTypeMap = function () {
        return BatchQueryMessagingSubscriptionsForSpaceAlphaOutput.attributeTypeMap;
    };
    BatchQueryMessagingSubscriptionsForSpaceAlphaOutput.discriminator = undefined;
    BatchQueryMessagingSubscriptionsForSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'successes',
            baseName: 'successes',
            type: 'Array<GetMessagingSubscriptionSuccessResponse>',
        },
        {
            name: 'failures',
            baseName: 'failures',
            type: 'Array<GetMessagingSubscriptionFailureResponse>',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return BatchQueryMessagingSubscriptionsForSpaceAlphaOutput;
}());
exports.BatchQueryMessagingSubscriptionsForSpaceAlphaOutput = BatchQueryMessagingSubscriptionsForSpaceAlphaOutput;
//# sourceMappingURL=batchQueryMessagingSubscriptionsForSpaceAlphaOutput.js.map