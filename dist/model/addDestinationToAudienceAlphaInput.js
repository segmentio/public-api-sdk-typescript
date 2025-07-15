"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDestinationToAudienceAlphaInput = void 0;
var AddDestinationToAudienceAlphaInput = (function () {
    function AddDestinationToAudienceAlphaInput() {
    }
    AddDestinationToAudienceAlphaInput.getAttributeTypeMap = function () {
        return AddDestinationToAudienceAlphaInput.attributeTypeMap;
    };
    AddDestinationToAudienceAlphaInput.discriminator = undefined;
    AddDestinationToAudienceAlphaInput.attributeTypeMap = [
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
            name: 'destination',
            baseName: 'destination',
            type: 'DestinationInput',
        },
    ];
    return AddDestinationToAudienceAlphaInput;
}());
exports.AddDestinationToAudienceAlphaInput = AddDestinationToAudienceAlphaInput;
//# sourceMappingURL=addDestinationToAudienceAlphaInput.js.map