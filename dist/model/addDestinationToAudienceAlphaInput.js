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
            name: 'destination',
            baseName: 'destination',
            type: 'DestinationInput',
        },
        {
            name: 'idSyncConfiguration',
            baseName: 'idSyncConfiguration',
            type: 'object',
        },
        {
            name: 'connectionSettings',
            baseName: 'connectionSettings',
            type: 'any',
        },
    ];
    return AddDestinationToAudienceAlphaInput;
}());
exports.AddDestinationToAudienceAlphaInput = AddDestinationToAudienceAlphaInput;
//# sourceMappingURL=addDestinationToAudienceAlphaInput.js.map