"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings1 = void 0;
var Settings1 = (function () {
    function Settings1() {
    }
    Settings1.getAttributeTypeMap = function () {
        return Settings1.attributeTypeMap;
    };
    Settings1.discriminator = undefined;
    Settings1.attributeTypeMap = [
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
    return Settings1;
}());
exports.Settings1 = Settings1;
//# sourceMappingURL=settings1.js.map