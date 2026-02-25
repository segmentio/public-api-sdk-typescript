"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationForAudienceAlphaInput = void 0;
var UpdateDestinationForAudienceAlphaInput = (function () {
    function UpdateDestinationForAudienceAlphaInput() {
    }
    UpdateDestinationForAudienceAlphaInput.getAttributeTypeMap = function () {
        return UpdateDestinationForAudienceAlphaInput.attributeTypeMap;
    };
    UpdateDestinationForAudienceAlphaInput.discriminator = undefined;
    UpdateDestinationForAudienceAlphaInput.attributeTypeMap = [
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
    return UpdateDestinationForAudienceAlphaInput;
}());
exports.UpdateDestinationForAudienceAlphaInput = UpdateDestinationForAudienceAlphaInput;
//# sourceMappingURL=updateDestinationForAudienceAlphaInput.js.map