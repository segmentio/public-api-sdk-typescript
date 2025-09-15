"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivationOutput = void 0;
var ActivationOutput = (function () {
    function ActivationOutput() {
    }
    ActivationOutput.getAttributeTypeMap = function () {
        return ActivationOutput.attributeTypeMap;
    };
    ActivationOutput.discriminator = undefined;
    ActivationOutput.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
        {
            name: 'destinationConnectionId',
            baseName: 'destinationConnectionId',
            type: 'string',
        },
        {
            name: 'activationType',
            baseName: 'activationType',
            type: 'string',
        },
        {
            name: 'activationName',
            baseName: 'activationName',
            type: 'string',
        },
        {
            name: 'personalization',
            baseName: 'personalization',
            type: 'PersonalizationInput',
        },
        {
            name: 'destinationMapping',
            baseName: 'destinationMapping',
            type: 'DestinationSubscriptionConfiguration',
        },
        {
            name: 'performResync',
            baseName: 'performResync',
            type: 'boolean',
        },
    ];
    return ActivationOutput;
}());
exports.ActivationOutput = ActivationOutput;
//# sourceMappingURL=activationOutput.js.map