"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceComputeCadence = void 0;
var AudienceComputeCadence = (function () {
    function AudienceComputeCadence() {
    }
    AudienceComputeCadence.getAttributeTypeMap = function () {
        return AudienceComputeCadence.attributeTypeMap;
    };
    AudienceComputeCadence.discriminator = undefined;
    AudienceComputeCadence.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceComputeCadence.TypeEnum',
        },
    ];
    return AudienceComputeCadence;
}());
exports.AudienceComputeCadence = AudienceComputeCadence;
(function (AudienceComputeCadence) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["BATCH"] = 'BATCH'] = "BATCH";
        TypeEnum[TypeEnum["REALTIME"] = 'REALTIME'] = "REALTIME";
    })(TypeEnum = AudienceComputeCadence.TypeEnum || (AudienceComputeCadence.TypeEnum = {}));
})(AudienceComputeCadence = exports.AudienceComputeCadence || (exports.AudienceComputeCadence = {}));
exports.AudienceComputeCadence = AudienceComputeCadence;
//# sourceMappingURL=audienceComputeCadence.js.map