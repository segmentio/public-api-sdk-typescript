"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTriggeredJourneySummary = void 0;
var EventTriggeredJourneySummary = (function () {
    function EventTriggeredJourneySummary() {
    }
    EventTriggeredJourneySummary.getAttributeTypeMap = function () {
        return EventTriggeredJourneySummary.attributeTypeMap;
    };
    EventTriggeredJourneySummary.discriminator = undefined;
    EventTriggeredJourneySummary.attributeTypeMap = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
        },
        {
            name: 'versionNumber',
            baseName: 'versionNumber',
            type: 'number',
        },
    ];
    return EventTriggeredJourneySummary;
}());
exports.EventTriggeredJourneySummary = EventTriggeredJourneySummary;
//# sourceMappingURL=eventTriggeredJourneySummary.js.map