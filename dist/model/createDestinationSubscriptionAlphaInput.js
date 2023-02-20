"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDestinationSubscriptionAlphaInput = void 0;
var CreateDestinationSubscriptionAlphaInput = (function () {
    function CreateDestinationSubscriptionAlphaInput() {
    }
    CreateDestinationSubscriptionAlphaInput.getAttributeTypeMap = function () {
        return CreateDestinationSubscriptionAlphaInput.attributeTypeMap;
    };
    CreateDestinationSubscriptionAlphaInput.discriminator = undefined;
    CreateDestinationSubscriptionAlphaInput.attributeTypeMap = [
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
            type: 'any',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
    ];
    return CreateDestinationSubscriptionAlphaInput;
}());
exports.CreateDestinationSubscriptionAlphaInput = CreateDestinationSubscriptionAlphaInput;
//# sourceMappingURL=createDestinationSubscriptionAlphaInput.js.map