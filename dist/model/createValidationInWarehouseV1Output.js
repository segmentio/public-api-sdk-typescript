"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationInWarehouseV1Output = void 0;
var CreateValidationInWarehouseV1Output = (function () {
    function CreateValidationInWarehouseV1Output() {
    }
    CreateValidationInWarehouseV1Output.getAttributeTypeMap = function () {
        return CreateValidationInWarehouseV1Output.attributeTypeMap;
    };
    CreateValidationInWarehouseV1Output.discriminator = undefined;
    CreateValidationInWarehouseV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'CreateValidationInWarehouseV1Output.StatusEnum',
        },
    ];
    return CreateValidationInWarehouseV1Output;
}());
exports.CreateValidationInWarehouseV1Output = CreateValidationInWarehouseV1Output;
(function (CreateValidationInWarehouseV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["CONNECTED"] = 'CONNECTED'] = "CONNECTED";
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
    })(StatusEnum = CreateValidationInWarehouseV1Output.StatusEnum || (CreateValidationInWarehouseV1Output.StatusEnum = {}));
})(CreateValidationInWarehouseV1Output = exports.CreateValidationInWarehouseV1Output || (exports.CreateValidationInWarehouseV1Output = {}));
exports.CreateValidationInWarehouseV1Output = CreateValidationInWarehouseV1Output;
//# sourceMappingURL=createValidationInWarehouseV1Output.js.map