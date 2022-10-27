"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSchemaSettingsInSourceV1Input = void 0;
var UpdateSchemaSettingsInSourceV1Input = (function () {
    function UpdateSchemaSettingsInSourceV1Input() {
    }
    UpdateSchemaSettingsInSourceV1Input.getAttributeTypeMap = function () {
        return UpdateSchemaSettingsInSourceV1Input.attributeTypeMap;
    };
    UpdateSchemaSettingsInSourceV1Input.discriminator = undefined;
    UpdateSchemaSettingsInSourceV1Input.attributeTypeMap = [
        {
            name: 'track',
            baseName: 'track',
            type: 'Track',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'Identify',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'Group',
        },
        {
            name: 'forwardingViolationsTo',
            baseName: 'forwardingViolationsTo',
            type: 'string',
        },
        {
            name: 'forwardingBlockedEventsTo',
            baseName: 'forwardingBlockedEventsTo',
            type: 'string',
        },
    ];
    return UpdateSchemaSettingsInSourceV1Input;
}());
exports.UpdateSchemaSettingsInSourceV1Input = UpdateSchemaSettingsInSourceV1Input;
//# sourceMappingURL=updateSchemaSettingsInSourceV1Input.js.map