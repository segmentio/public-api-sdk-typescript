"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingPlan = void 0;
var TrackingPlan = (function () {
    function TrackingPlan() {
    }
    TrackingPlan.getAttributeTypeMap = function () {
        return TrackingPlan.attributeTypeMap;
    };
    TrackingPlan.discriminator = undefined;
    TrackingPlan.attributeTypeMap = [
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
            type: 'TrackingPlan.TypeEnum',
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
    return TrackingPlan;
}());
exports.TrackingPlan = TrackingPlan;
(function (TrackingPlan) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["LIVE"] = 'LIVE'] = "LIVE";
        TypeEnum[TypeEnum["PROPERTY_LIBRARY"] = 'PROPERTY_LIBRARY'] = "PROPERTY_LIBRARY";
        TypeEnum[TypeEnum["RULE_LIBRARY"] = 'RULE_LIBRARY'] = "RULE_LIBRARY";
        TypeEnum[TypeEnum["TEMPLATE"] = 'TEMPLATE'] = "TEMPLATE";
    })(TypeEnum = TrackingPlan.TypeEnum || (TrackingPlan.TypeEnum = {}));
})(TrackingPlan = exports.TrackingPlan || (exports.TrackingPlan = {}));
exports.TrackingPlan = TrackingPlan;
//# sourceMappingURL=trackingPlan.js.map