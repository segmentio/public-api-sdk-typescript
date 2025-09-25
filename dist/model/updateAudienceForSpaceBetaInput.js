"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudienceForSpaceBetaInput = void 0;
var UpdateAudienceForSpaceBetaInput = (function () {
    function UpdateAudienceForSpaceBetaInput() {
    }
    UpdateAudienceForSpaceBetaInput.getAttributeTypeMap = function () {
        return UpdateAudienceForSpaceBetaInput.attributeTypeMap;
    };
    UpdateAudienceForSpaceBetaInput.discriminator = undefined;
    UpdateAudienceForSpaceBetaInput.attributeTypeMap = [
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
            type: 'AudienceDefinitionWithoutTargetEntity',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
    ];
    return UpdateAudienceForSpaceBetaInput;
}());
exports.UpdateAudienceForSpaceBetaInput = UpdateAudienceForSpaceBetaInput;
//# sourceMappingURL=updateAudienceForSpaceBetaInput.js.map