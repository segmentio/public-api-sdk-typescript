"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOverviewAudienceFilterBy = void 0;
var DeliveryOverviewAudienceFilterBy = (function () {
    function DeliveryOverviewAudienceFilterBy() {
    }
    DeliveryOverviewAudienceFilterBy.getAttributeTypeMap = function () {
        return DeliveryOverviewAudienceFilterBy.attributeTypeMap;
    };
    DeliveryOverviewAudienceFilterBy.discriminator = undefined;
    DeliveryOverviewAudienceFilterBy.attributeTypeMap = [
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
    return DeliveryOverviewAudienceFilterBy;
}());
exports.DeliveryOverviewAudienceFilterBy = DeliveryOverviewAudienceFilterBy;
//# sourceMappingURL=deliveryOverviewAudienceFilterBy.js.map