"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewSourceFilterBy = void 0;
var DeliveryOverviewSourceFilterBy = (function () {
    function DeliveryOverviewSourceFilterBy() {
    }
    DeliveryOverviewSourceFilterBy.getAttributeTypeMap = function () {
        return DeliveryOverviewSourceFilterBy.attributeTypeMap;
    };
    DeliveryOverviewSourceFilterBy.discriminator = undefined;
    DeliveryOverviewSourceFilterBy.attributeTypeMap = [
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
            name: 'activationId',
            baseName: 'activationId',
            type: 'Array<string>',
        },
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'Array<string>',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'Array<string>',
        },
    ];
    return DeliveryOverviewSourceFilterBy;
}());
exports.DeliveryOverviewSourceFilterBy = DeliveryOverviewSourceFilterBy;
//# sourceMappingURL=deliveryOverviewSourceFilterBy.js.map