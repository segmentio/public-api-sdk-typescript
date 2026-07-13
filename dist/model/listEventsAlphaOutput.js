"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEventsAlphaOutput = void 0;
var ListEventsAlphaOutput = (function () {
    function ListEventsAlphaOutput() {
    }
    ListEventsAlphaOutput.getAttributeTypeMap = function () {
        return ListEventsAlphaOutput.attributeTypeMap;
    };
    ListEventsAlphaOutput.discriminator = undefined;
    ListEventsAlphaOutput.attributeTypeMap = [
        {
            name: 'events',
            baseName: 'events',
            type: 'Array<EventAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListEventsAlphaOutput;
}());
exports.ListEventsAlphaOutput = ListEventsAlphaOutput;
//# sourceMappingURL=listEventsAlphaOutput.js.map