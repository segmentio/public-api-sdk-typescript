"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDestinationsV1Output = void 0;
var ListDestinationsV1Output = (function () {
    function ListDestinationsV1Output() {
    }
    ListDestinationsV1Output.getAttributeTypeMap = function () {
        return ListDestinationsV1Output.attributeTypeMap;
    };
    ListDestinationsV1Output.discriminator = undefined;
    ListDestinationsV1Output.attributeTypeMap = [
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<DestinationV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListDestinationsV1Output;
}());
exports.ListDestinationsV1Output = ListDestinationsV1Output;
//# sourceMappingURL=listDestinationsV1Output.js.map