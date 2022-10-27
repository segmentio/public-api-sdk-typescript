"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrackingPlanV1Input = void 0;
var CreateTrackingPlanV1Input = (function () {
    function CreateTrackingPlanV1Input() {
    }
    CreateTrackingPlanV1Input.getAttributeTypeMap = function () {
        return CreateTrackingPlanV1Input.attributeTypeMap;
    };
    CreateTrackingPlanV1Input.discriminator = undefined;
    CreateTrackingPlanV1Input.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'CreateTrackingPlanV1Input.TypeEnum',
        },
    ];
    return CreateTrackingPlanV1Input;
}());
exports.CreateTrackingPlanV1Input = CreateTrackingPlanV1Input;
(function (CreateTrackingPlanV1Input) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["LIVE"] = 'LIVE'] = "LIVE";
        TypeEnum[TypeEnum["PROPERTY_LIBRARY"] = 'PROPERTY_LIBRARY'] = "PROPERTY_LIBRARY";
        TypeEnum[TypeEnum["RULE_LIBRARY"] = 'RULE_LIBRARY'] = "RULE_LIBRARY";
        TypeEnum[TypeEnum["TEMPLATE"] = 'TEMPLATE'] = "TEMPLATE";
    })(TypeEnum = CreateTrackingPlanV1Input.TypeEnum || (CreateTrackingPlanV1Input.TypeEnum = {}));
})(CreateTrackingPlanV1Input = exports.CreateTrackingPlanV1Input || (exports.CreateTrackingPlanV1Input = {}));
exports.CreateTrackingPlanV1Input = CreateTrackingPlanV1Input;
//# sourceMappingURL=createTrackingPlanV1Input.js.map