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
            name: 'versionSchema',
            baseName: 'versionSchema',
            type: 'string',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
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
            name: 'hasEnabledResync',
            baseName: 'hasEnabledResync',
            type: 'boolean',
        },
        {
            name: 'emitEntityContext',
            baseName: 'emitEntityContext',
            type: 'string',
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
    return AddActivationToAudienceAlphaInput;
}());
exports.AddActivationToAudienceAlphaInput = AddActivationToAudienceAlphaInput;
//# sourceMappingURL=addActivationToAudienceAlphaInput.js.map