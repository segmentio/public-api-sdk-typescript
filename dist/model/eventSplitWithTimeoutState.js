"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSplitWithTimeoutState = void 0;
var EventSplitWithTimeoutState = (function () {
    function EventSplitWithTimeoutState() {
    }
    EventSplitWithTimeoutState.getAttributeTypeMap = function () {
        return EventSplitWithTimeoutState.attributeTypeMap;
    };
    EventSplitWithTimeoutState.discriminator = undefined;
    EventSplitWithTimeoutState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'EventSplitWithTimeoutState.TypeEnum',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<TransitionsInner>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return EventSplitWithTimeoutState;
}());
exports.EventSplitWithTimeoutState = EventSplitWithTimeoutState;
(function (EventSplitWithTimeoutState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EVENT_SPLIT"] = 'EVENT_SPLIT'] = "EVENT_SPLIT";
    })(TypeEnum = EventSplitWithTimeoutState.TypeEnum || (EventSplitWithTimeoutState.TypeEnum = {}));
})(EventSplitWithTimeoutState = exports.EventSplitWithTimeoutState || (exports.EventSplitWithTimeoutState = {}));
exports.EventSplitWithTimeoutState = EventSplitWithTimeoutState;
//# sourceMappingURL=eventSplitWithTimeoutState.js.map