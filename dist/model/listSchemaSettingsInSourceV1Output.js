"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchemaSettingsInSourceV1Output = void 0;
var ListSchemaSettingsInSourceV1Output = (function () {
    function ListSchemaSettingsInSourceV1Output() {
    }
    ListSchemaSettingsInSourceV1Output.getAttributeTypeMap = function () {
        return ListSchemaSettingsInSourceV1Output.attributeTypeMap;
    };
    ListSchemaSettingsInSourceV1Output.discriminator = undefined;
    ListSchemaSettingsInSourceV1Output.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'Settings',
        },
    ];
    return ListSchemaSettingsInSourceV1Output;
}());
exports.ListSchemaSettingsInSourceV1Output = ListSchemaSettingsInSourceV1Output;
//# sourceMappingURL=listSchemaSettingsInSourceV1Output.js.map