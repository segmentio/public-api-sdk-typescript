"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingPlan1 = void 0;
var TrackingPlan1 = (function () {
    function TrackingPlan1() {
    }
    TrackingPlan1.getAttributeTypeMap = function () {
        return TrackingPlan1.attributeTypeMap;
    };
    TrackingPlan1.discriminator = undefined;
    TrackingPlan1.attributeTypeMap = [
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
            type: 'TrackingPlan1.TypeEnum',
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
    return TrackingPlan1;
}());
exports.TrackingPlan1 = TrackingPlan1;
(function (TrackingPlan1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ENGAGE"] = 'ENGAGE'] = "ENGAGE";
        TypeEnum[TypeEnum["LIVE"] = 'LIVE'] = "LIVE";
        TypeEnum[TypeEnum["PROPERTY_LIBRARY"] = 'PROPERTY_LIBRARY'] = "PROPERTY_LIBRARY";
        TypeEnum[TypeEnum["RULE_LIBRARY"] = 'RULE_LIBRARY'] = "RULE_LIBRARY";
        TypeEnum[TypeEnum["TEMPLATE"] = 'TEMPLATE'] = "TEMPLATE";
    })(TypeEnum = TrackingPlan1.TypeEnum || (TrackingPlan1.TypeEnum = {}));
})(TrackingPlan1 = exports.TrackingPlan1 || (exports.TrackingPlan1 = {}));
exports.TrackingPlan1 = TrackingPlan1;
//# sourceMappingURL=trackingPlan1.js.map