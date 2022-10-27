"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesInTrackingPlanV1Input = void 0;
var UpdateRulesInTrackingPlanV1Input = (function () {
    function UpdateRulesInTrackingPlanV1Input() {
    }
    UpdateRulesInTrackingPlanV1Input.getAttributeTypeMap = function () {
        return UpdateRulesInTrackingPlanV1Input.attributeTypeMap;
    };
    UpdateRulesInTrackingPlanV1Input.discriminator = undefined;
    UpdateRulesInTrackingPlanV1Input.attributeTypeMap = [
        {
            name: 'rules',
            baseName: 'rules',
            type: 'Array<UpsertRuleV1>',
        },
    ];
    return UpdateRulesInTrackingPlanV1Input;
}());
exports.UpdateRulesInTrackingPlanV1Input = UpdateRulesInTrackingPlanV1Input;
//# sourceMappingURL=updateRulesInTrackingPlanV1Input.js.map