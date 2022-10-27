"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRegulationV1Output = void 0;
var DeleteRegulationV1Output = (function () {
    function DeleteRegulationV1Output() {
    }
    DeleteRegulationV1Output.getAttributeTypeMap = function () {
        return DeleteRegulationV1Output.attributeTypeMap;
    };
    DeleteRegulationV1Output.discriminator = undefined;
    DeleteRegulationV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteRegulationV1Output.StatusEnum',
        },
    ];
    return DeleteRegulationV1Output;
}());
exports.DeleteRegulationV1Output = DeleteRegulationV1Output;
(function (DeleteRegulationV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteRegulationV1Output.StatusEnum || (DeleteRegulationV1Output.StatusEnum = {}));
})(DeleteRegulationV1Output = exports.DeleteRegulationV1Output || (exports.DeleteRegulationV1Output = {}));
exports.DeleteRegulationV1Output = DeleteRegulationV1Output;
//# sourceMappingURL=deleteRegulationV1Output.js.map