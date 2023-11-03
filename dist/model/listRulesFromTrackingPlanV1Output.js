"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRulesFromTrackingPlanV1Output = void 0;
var ListRulesFromTrackingPlanV1Output = (function () {
    function ListRulesFromTrackingPlanV1Output() {
    }
    ListRulesFromTrackingPlanV1Output.getAttributeTypeMap = function () {
        return ListRulesFromTrackingPlanV1Output.attributeTypeMap;
    };
    ListRulesFromTrackingPlanV1Output.discriminator = undefined;
    ListRulesFromTrackingPlanV1Output.attributeTypeMap = [
        {
            name: 'rules',
            baseName: 'rules',
            type: 'Array<RuleV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListRulesFromTrackingPlanV1Output;
}());
exports.ListRulesFromTrackingPlanV1Output = ListRulesFromTrackingPlanV1Output;
//# sourceMappingURL=listRulesFromTrackingPlanV1Output.js.map