"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewFilterBy = void 0;
var DeliveryOverviewFilterBy = (function () {
    function DeliveryOverviewFilterBy() {
    }
    DeliveryOverviewFilterBy.getAttributeTypeMap = function () {
        return DeliveryOverviewFilterBy.attributeTypeMap;
    };
    DeliveryOverviewFilterBy.discriminator = undefined;
    DeliveryOverviewFilterBy.attributeTypeMap = [
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
    ];
    return DeliveryOverviewFilterBy;
}());
exports.DeliveryOverviewFilterBy = DeliveryOverviewFilterBy;
//# sourceMappingURL=deliveryOverviewFilterBy.js.map