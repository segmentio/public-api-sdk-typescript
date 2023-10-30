"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSchemaSettingsInSourceV1Output = void 0;
var UpdateSchemaSettingsInSourceV1Output = (function () {
    function UpdateSchemaSettingsInSourceV1Output() {
    }
    UpdateSchemaSettingsInSourceV1Output.getAttributeTypeMap = function () {
        return UpdateSchemaSettingsInSourceV1Output.attributeTypeMap;
    };
    UpdateSchemaSettingsInSourceV1Output.discriminator = undefined;
    UpdateSchemaSettingsInSourceV1Output.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'SourceSettingsOutputV1',
        },
    ];
    return UpdateSchemaSettingsInSourceV1Output;
}());
exports.UpdateSchemaSettingsInSourceV1Output = UpdateSchemaSettingsInSourceV1Output;
//# sourceMappingURL=updateSchemaSettingsInSourceV1Output.js.map