"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewDestinationFilterBy = void 0;
var DeliveryOverviewDestinationFilterBy = (function () {
    function DeliveryOverviewDestinationFilterBy() {
    }
    DeliveryOverviewDestinationFilterBy.getAttributeTypeMap = function () {
        return DeliveryOverviewDestinationFilterBy.attributeTypeMap;
    };
    DeliveryOverviewDestinationFilterBy.discriminator = undefined;
    DeliveryOverviewDestinationFilterBy.attributeTypeMap = [
        {
            name: 'discardReason',
            baseName: 'discardReason',
            type: 'Array<string>',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'Array<string>',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'Array<string>',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'Array<string>',
        },
        {
            name: 'subscriptionId',
            baseName: 'subscriptionId',
            type: 'Array<string>',
        },
    ];
    return DeliveryOverviewDestinationFilterBy;
}());
exports.DeliveryOverviewDestinationFilterBy = DeliveryOverviewDestinationFilterBy;
//# sourceMappingURL=deliveryOverviewDestinationFilterBy.js.map