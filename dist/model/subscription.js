"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var Subscription = (function () {
    function Subscription() {
    }
    Subscription.getAttributeTypeMap = function () {
        return Subscription.attributeTypeMap;
    };
    Subscription.discriminator = undefined;
    Subscription.attributeTypeMap = [
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
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
    ];
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map