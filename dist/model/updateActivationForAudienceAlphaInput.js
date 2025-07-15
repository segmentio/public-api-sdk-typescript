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
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'eventEmitter',
            baseName: 'eventEmitter',
            type: 'any',
        },
        {
            name: 'subscription',
            baseName: 'subscription',
            type: 'any',
        },
    ];
    return UpdateActivationForAudienceAlphaInput;
}());
exports.UpdateActivationForAudienceAlphaInput = UpdateActivationForAudienceAlphaInput;
//# sourceMappingURL=updateActivationForAudienceAlphaInput.js.map