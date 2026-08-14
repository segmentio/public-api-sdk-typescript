"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationInWarehouseV2Output = void 0;
var CreateValidationInWarehouseV2Output = (function () {
    function CreateValidationInWarehouseV2Output() {
    }
    CreateValidationInWarehouseV2Output.getAttributeTypeMap = function () {
        return CreateValidationInWarehouseV2Output.attributeTypeMap;
    };
    CreateValidationInWarehouseV2Output.discriminator = undefined;
    CreateValidationInWarehouseV2Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'CreateValidationInWarehouseV2Output.StatusEnum',
        },
    ];
    return CreateValidationInWarehouseV2Output;
}());
exports.CreateValidationInWarehouseV2Output = CreateValidationInWarehouseV2Output;
(function (CreateValidationInWarehouseV2Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["CONNECTED"] = 'CONNECTED'] = "CONNECTED";
        StatusEnum[StatusEnum["FAILED"] = 'FAILED'] = "FAILED";
    })(StatusEnum = CreateValidationInWarehouseV2Output.StatusEnum || (CreateValidationInWarehouseV2Output.StatusEnum = {}));
})(CreateValidationInWarehouseV2Output = exports.CreateValidationInWarehouseV2Output || (exports.CreateValidationInWarehouseV2Output = {}));
exports.CreateValidationInWarehouseV2Output = CreateValidationInWarehouseV2Output;
//# sourceMappingURL=createValidationInWarehouseV2Output.js.map