"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationForAudienceAlphaOutput = void 0;
var UpdateDestinationForAudienceAlphaOutput = (function () {
    function UpdateDestinationForAudienceAlphaOutput() {
    }
    UpdateDestinationForAudienceAlphaOutput.getAttributeTypeMap = function () {
        return UpdateDestinationForAudienceAlphaOutput.attributeTypeMap;
    };
    UpdateDestinationForAudienceAlphaOutput.discriminator = undefined;
    UpdateDestinationForAudienceAlphaOutput.attributeTypeMap = [
        {
            name: 'destination',
            baseName: 'destination',
            type: 'Destination',
        },
        {
            name: 'idSyncConfiguration',
            baseName: 'idSyncConfiguration',
            type: 'Array<IDSyncConfigurationInput>',
        },
        {
            name: 'connectionSettings',
            baseName: 'connectionSettings',
            type: 'any',
        },
    ];
    return UpdateDestinationForAudienceAlphaOutput;
}());
exports.UpdateDestinationForAudienceAlphaOutput = UpdateDestinationForAudienceAlphaOutput;
//# sourceMappingURL=updateDestinationForAudienceAlphaOutput.js.map