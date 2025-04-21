"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceForSpaceAlphaInput = void 0;
var UpdateAudienceForSpaceAlphaInput = (function () {
    function UpdateAudienceForSpaceAlphaInput() {
    }
    UpdateAudienceForSpaceAlphaInput.getAttributeTypeMap = function () {
        return UpdateAudienceForSpaceAlphaInput.attributeTypeMap;
    };
    UpdateAudienceForSpaceAlphaInput.discriminator = undefined;
    UpdateAudienceForSpaceAlphaInput.attributeTypeMap = [
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
            type: 'AudienceDefinition',
        },
    ];
    return UpdateAudienceForSpaceAlphaInput;
}());
exports.UpdateAudienceForSpaceAlphaInput = UpdateAudienceForSpaceAlphaInput;
//# sourceMappingURL=updateAudienceForSpaceAlphaInput.js.map