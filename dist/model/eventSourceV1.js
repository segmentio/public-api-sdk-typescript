"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSourceV1 = void 0;
var EventSourceV1 = (function () {
    function EventSourceV1() {
    }
    EventSourceV1.getAttributeTypeMap = function () {
        return EventSourceV1.attributeTypeMap;
    };
    EventSourceV1.discriminator = undefined;
    EventSourceV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
    ];
    return EventSourceV1;
}());
exports.EventSourceV1 = EventSourceV1;
//# sourceMappingURL=eventSourceV1.js.map