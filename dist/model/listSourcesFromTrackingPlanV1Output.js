"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSourcesFromTrackingPlanV1Output = void 0;
var ListSourcesFromTrackingPlanV1Output = (function () {
    function ListSourcesFromTrackingPlanV1Output() {
    }
    ListSourcesFromTrackingPlanV1Output.getAttributeTypeMap = function () {
        return ListSourcesFromTrackingPlanV1Output.attributeTypeMap;
    };
    ListSourcesFromTrackingPlanV1Output.discriminator = undefined;
    ListSourcesFromTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'sources',
            baseName: 'sources',
            type: 'Array<SourceV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListSourcesFromTrackingPlanV1Output;
}());
exports.ListSourcesFromTrackingPlanV1Output = ListSourcesFromTrackingPlanV1Output;
//# sourceMappingURL=listSourcesFromTrackingPlanV1Output.js.map