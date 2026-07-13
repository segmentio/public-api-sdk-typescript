"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPropertyAlpha = void 0;
var EventPropertyAlpha = (function () {
    function EventPropertyAlpha() {
    }
    EventPropertyAlpha.getAttributeTypeMap = function () {
        return EventPropertyAlpha.attributeTypeMap;
    };
    EventPropertyAlpha.discriminator = undefined;
    EventPropertyAlpha.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'EventPropertyType',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'lastSeenAt',
            baseName: 'lastSeenAt',
            type: 'string',
        },
        {
            name: 'samples',
            baseName: 'samples',
            type: 'Array<string>',
        },
    ];
    return EventPropertyAlpha;
}());
exports.EventPropertyAlpha = EventPropertyAlpha;
//# sourceMappingURL=eventPropertyAlpha.js.map