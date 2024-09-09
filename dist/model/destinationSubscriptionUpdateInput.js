"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationSubscriptionUpdateInput = void 0;
var DestinationSubscriptionUpdateInput = (function () {
    function DestinationSubscriptionUpdateInput() {
    }
    DestinationSubscriptionUpdateInput.getAttributeTypeMap = function () {
        return DestinationSubscriptionUpdateInput.attributeTypeMap;
    };
    DestinationSubscriptionUpdateInput.discriminator = undefined;
    DestinationSubscriptionUpdateInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'reverseETLModelId',
            baseName: 'reverseETLModelId',
            type: 'string',
        },
        {
            name: 'reverseETLSchedule',
            baseName: 'reverseETLSchedule',
            type: 'ReverseEtlScheduleDefinition',
        },
    ];
    return DestinationSubscriptionUpdateInput;
}());
exports.DestinationSubscriptionUpdateInput = DestinationSubscriptionUpdateInput;
//# sourceMappingURL=destinationSubscriptionUpdateInput.js.map