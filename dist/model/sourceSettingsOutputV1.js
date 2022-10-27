"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceSettingsOutputV1 = void 0;
var SourceSettingsOutputV1 = (function () {
    function SourceSettingsOutputV1() {
    }
    SourceSettingsOutputV1.getAttributeTypeMap = function () {
        return SourceSettingsOutputV1.attributeTypeMap;
    };
    SourceSettingsOutputV1.discriminator = undefined;
    SourceSettingsOutputV1.attributeTypeMap = [
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
    return SourceSettingsOutputV1;
}());
exports.SourceSettingsOutputV1 = SourceSettingsOutputV1;
//# sourceMappingURL=sourceSettingsOutputV1.js.map