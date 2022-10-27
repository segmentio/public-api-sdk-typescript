"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddConnectionFromSourceToWarehouseV1Output = void 0;
var AddConnectionFromSourceToWarehouseV1Output = (function () {
    function AddConnectionFromSourceToWarehouseV1Output() {
    }
    AddConnectionFromSourceToWarehouseV1Output.getAttributeTypeMap = function () {
        return AddConnectionFromSourceToWarehouseV1Output.attributeTypeMap;
    };
    AddConnectionFromSourceToWarehouseV1Output.discriminator = undefined;
    AddConnectionFromSourceToWarehouseV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'AddConnectionFromSourceToWarehouseV1Output.StatusEnum',
        },
    ];
    return AddConnectionFromSourceToWarehouseV1Output;
}());
exports.AddConnectionFromSourceToWarehouseV1Output = AddConnectionFromSourceToWarehouseV1Output;
(function (AddConnectionFromSourceToWarehouseV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["CONNECTED"] = 'CONNECTED'] = "CONNECTED";
        StatusEnum[StatusEnum["NOT_CONNECTED"] = 'NOT_CONNECTED'] = "NOT_CONNECTED";
    })(StatusEnum = AddConnectionFromSourceToWarehouseV1Output.StatusEnum || (AddConnectionFromSourceToWarehouseV1Output.StatusEnum = {}));
})(AddConnectionFromSourceToWarehouseV1Output = exports.AddConnectionFromSourceToWarehouseV1Output || (exports.AddConnectionFromSourceToWarehouseV1Output = {}));
exports.AddConnectionFromSourceToWarehouseV1Output = AddConnectionFromSourceToWarehouseV1Output;
//# sourceMappingURL=addConnectionFromSourceToWarehouseV1Output.js.map