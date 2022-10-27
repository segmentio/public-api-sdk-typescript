"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingPlanV1 = void 0;
var TrackingPlanV1 = (function () {
    function TrackingPlanV1() {
    }
    TrackingPlanV1.getAttributeTypeMap = function () {
        return TrackingPlanV1.attributeTypeMap;
    };
    TrackingPlanV1.discriminator = undefined;
    TrackingPlanV1.attributeTypeMap = [
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
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'TrackingPlanV1.TypeEnum',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
    ];
    return TrackingPlanV1;
}());
exports.TrackingPlanV1 = TrackingPlanV1;
(function (TrackingPlanV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["LIVE"] = 'LIVE'] = "LIVE";
        TypeEnum[TypeEnum["PROPERTY_LIBRARY"] = 'PROPERTY_LIBRARY'] = "PROPERTY_LIBRARY";
        TypeEnum[TypeEnum["RULE_LIBRARY"] = 'RULE_LIBRARY'] = "RULE_LIBRARY";
        TypeEnum[TypeEnum["TEMPLATE"] = 'TEMPLATE'] = "TEMPLATE";
    })(TypeEnum = TrackingPlanV1.TypeEnum || (TrackingPlanV1.TypeEnum = {}));
})(TrackingPlanV1 = exports.TrackingPlanV1 || (exports.TrackingPlanV1 = {}));
exports.TrackingPlanV1 = TrackingPlanV1;
//# sourceMappingURL=trackingPlanV1.js.map