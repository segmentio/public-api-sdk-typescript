"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTrackingPlansV1Output = void 0;
var ListTrackingPlansV1Output = (function () {
    function ListTrackingPlansV1Output() {
    }
    ListTrackingPlansV1Output.getAttributeTypeMap = function () {
        return ListTrackingPlansV1Output.attributeTypeMap;
    };
    ListTrackingPlansV1Output.discriminator = undefined;
    ListTrackingPlansV1Output.attributeTypeMap = [
        {
            name: 'trackingPlans',
            baseName: 'trackingPlans',
            type: 'Array<TrackingPlanV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];
    return ListTrackingPlansV1Output;
}());
exports.ListTrackingPlansV1Output = ListTrackingPlansV1Output;
//# sourceMappingURL=listTrackingPlansV1Output.js.map