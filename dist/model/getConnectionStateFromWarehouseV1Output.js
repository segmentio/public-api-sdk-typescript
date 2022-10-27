"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConnectionStateFromWarehouseV1Output = void 0;
var GetConnectionStateFromWarehouseV1Output = (function () {
    function GetConnectionStateFromWarehouseV1Output() {
    }
    GetConnectionStateFromWarehouseV1Output.getAttributeTypeMap = function () {
        return GetConnectionStateFromWarehouseV1Output.attributeTypeMap;
    };
    GetConnectionStateFromWarehouseV1Output.discriminator = undefined;
    GetConnectionStateFromWarehouseV1Output.attributeTypeMap = [
        {
            name: 'connectionState',
            baseName: 'connectionState',
            type: 'GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum',
        },
    ];
    return GetConnectionStateFromWarehouseV1Output;
}());
exports.GetConnectionStateFromWarehouseV1Output = GetConnectionStateFromWarehouseV1Output;
(function (GetConnectionStateFromWarehouseV1Output) {
    var ConnectionStateEnum;
    (function (ConnectionStateEnum) {
        ConnectionStateEnum[ConnectionStateEnum["CONNECTED"] = 'CONNECTED'] = "CONNECTED";
        ConnectionStateEnum[ConnectionStateEnum["FAILED"] = 'FAILED'] = "FAILED";
    })(ConnectionStateEnum = GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum || (GetConnectionStateFromWarehouseV1Output.ConnectionStateEnum = {}));
})(GetConnectionStateFromWarehouseV1Output = exports.GetConnectionStateFromWarehouseV1Output || (exports.GetConnectionStateFromWarehouseV1Output = {}));
exports.GetConnectionStateFromWarehouseV1Output = GetConnectionStateFromWarehouseV1Output;
//# sourceMappingURL=getConnectionStateFromWarehouseV1Output.js.map