"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionsFromDestinationAlphaOutput = void 0;
var ListSubscriptionsFromDestinationAlphaOutput = (function () {
    function ListSubscriptionsFromDestinationAlphaOutput() {
    }
    ListSubscriptionsFromDestinationAlphaOutput.getAttributeTypeMap = function () {
        return ListSubscriptionsFromDestinationAlphaOutput.attributeTypeMap;
    };
    ListSubscriptionsFromDestinationAlphaOutput.discriminator = undefined;
    ListSubscriptionsFromDestinationAlphaOutput.attributeTypeMap = [
        {
            name: 'subscriptions',
            baseName: 'subscriptions',
            type: 'Array<DestinationSubscription>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSubscriptionsFromDestinationAlphaOutput;
}());
exports.ListSubscriptionsFromDestinationAlphaOutput = ListSubscriptionsFromDestinationAlphaOutput;
//# sourceMappingURL=listSubscriptionsFromDestinationAlphaOutput.js.map