"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationSubscription = void 0;
var DestinationSubscription = (function () {
    function DestinationSubscription() {
    }
    DestinationSubscription.getAttributeTypeMap = function () {
        return DestinationSubscription.attributeTypeMap;
    };
    DestinationSubscription.discriminator = undefined;
    DestinationSubscription.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'actionId',
            baseName: 'actionId',
            type: 'string',
        },
        {
            name: 'actionSlug',
            baseName: 'actionSlug',
            type: 'string',
        },
        {
            name: 'destinationId',
            baseName: 'destinationId',
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
            type: 'any',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
    ];
    return DestinationSubscription;
}());
exports.DestinationSubscription = DestinationSubscription;
//# sourceMappingURL=destinationSubscription.js.map