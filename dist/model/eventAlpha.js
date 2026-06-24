"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAlpha = void 0;
var EventAlpha = (function () {
    function EventAlpha() {
    }
    EventAlpha.getAttributeTypeMap = function () {
        return EventAlpha.attributeTypeMap;
    };
    EventAlpha.discriminator = undefined;
    EventAlpha.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'EventType',
        },
        {
            name: 'lastSeenAt',
            baseName: 'lastSeenAt',
            type: 'string',
        },
    ];
    return EventAlpha;
}());
exports.EventAlpha = EventAlpha;
//# sourceMappingURL=eventAlpha.js.map