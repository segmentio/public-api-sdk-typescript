"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionDeployment = void 0;
var FunctionDeployment = (function () {
    function FunctionDeployment() {
    }
    FunctionDeployment.getAttributeTypeMap = function () {
        return FunctionDeployment.attributeTypeMap;
    };
    FunctionDeployment.discriminator = undefined;
    FunctionDeployment.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'FunctionDeployment.StatusEnum',
        },
    ];
    return FunctionDeployment;
}());
exports.FunctionDeployment = FunctionDeployment;
(function (FunctionDeployment) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = FunctionDeployment.StatusEnum || (FunctionDeployment.StatusEnum = {}));
})(FunctionDeployment = exports.FunctionDeployment || (exports.FunctionDeployment = {}));
exports.FunctionDeployment = FunctionDeployment;
//# sourceMappingURL=functionDeployment.js.map