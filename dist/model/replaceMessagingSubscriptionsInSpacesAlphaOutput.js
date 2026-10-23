"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceMessagingSubscriptionsInSpacesAlphaOutput = void 0;
var ReplaceMessagingSubscriptionsInSpacesAlphaOutput = (function () {
    function ReplaceMessagingSubscriptionsInSpacesAlphaOutput() {
    }
    ReplaceMessagingSubscriptionsInSpacesAlphaOutput.getAttributeTypeMap = function () {
        return ReplaceMessagingSubscriptionsInSpacesAlphaOutput.attributeTypeMap;
    };
    ReplaceMessagingSubscriptionsInSpacesAlphaOutput.discriminator = undefined;
    ReplaceMessagingSubscriptionsInSpacesAlphaOutput.attributeTypeMap = [
        {
            name: 'successes',
            baseName: 'successes',
            type: 'Array<MessageSubscriptionResponse>',
        },
        {
            name: 'failures',
            baseName: 'failures',
            type: 'Array<MessageSubscriptionResponse>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ReplaceMessagingSubscriptionsInSpacesAlphaOutput;
}());
exports.ReplaceMessagingSubscriptionsInSpacesAlphaOutput = ReplaceMessagingSubscriptionsInSpacesAlphaOutput;
//# sourceMappingURL=replaceMessagingSubscriptionsInSpacesAlphaOutput.js.map