"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActivationForAudienceAlphaInput = void 0;
var UpdateActivationForAudienceAlphaInput = (function () {
    function UpdateActivationForAudienceAlphaInput() {
    }
    UpdateActivationForAudienceAlphaInput.getAttributeTypeMap = function () {
        return UpdateActivationForAudienceAlphaInput.attributeTypeMap;
    };
    UpdateActivationForAudienceAlphaInput.discriminator = undefined;
    UpdateActivationForAudienceAlphaInput.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
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
    return UpdateActivationForAudienceAlphaInput;
}());
exports.UpdateActivationForAudienceAlphaInput = UpdateActivationForAudienceAlphaInput;
//# sourceMappingURL=updateActivationForAudienceAlphaInput.js.map