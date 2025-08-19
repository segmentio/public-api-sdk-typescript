"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddActivationToAudienceAlphaInput = void 0;
var AddActivationToAudienceAlphaInput = (function () {
    function AddActivationToAudienceAlphaInput() {
    }
    AddActivationToAudienceAlphaInput.getAttributeTypeMap = function () {
        return AddActivationToAudienceAlphaInput.attributeTypeMap;
    };
    AddActivationToAudienceAlphaInput.discriminator = undefined;
    AddActivationToAudienceAlphaInput.attributeTypeMap = [
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
            name: 'performFirstSync',
            baseName: 'performFirstSync',
            type: 'boolean',
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
    ];
    return AddActivationToAudienceAlphaInput;
}());
exports.AddActivationToAudienceAlphaInput = AddActivationToAudienceAlphaInput;
//# sourceMappingURL=addActivationToAudienceAlphaInput.js.map