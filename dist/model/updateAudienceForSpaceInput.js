"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceForSpaceInput = void 0;
var UpdateAudienceForSpaceInput = (function () {
    function UpdateAudienceForSpaceInput() {
    }
    UpdateAudienceForSpaceInput.getAttributeTypeMap = function () {
        return UpdateAudienceForSpaceInput.attributeTypeMap;
    };
    UpdateAudienceForSpaceInput.discriminator = undefined;
    UpdateAudienceForSpaceInput.attributeTypeMap = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceComputationDefinition',
        },
    ];
    return UpdateAudienceForSpaceInput;
}());
exports.UpdateAudienceForSpaceInput = UpdateAudienceForSpaceInput;
//# sourceMappingURL=updateAudienceForSpaceInput.js.map