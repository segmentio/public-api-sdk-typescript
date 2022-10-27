"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
var Settings = (function () {
    function Settings() {
    }
    Settings.getAttributeTypeMap = function () {
        return Settings.attributeTypeMap;
    };
    Settings.discriminator = undefined;
    Settings.attributeTypeMap = [
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
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map