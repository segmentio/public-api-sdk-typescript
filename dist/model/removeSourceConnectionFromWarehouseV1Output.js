"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSourceConnectionFromWarehouseV1Output = void 0;
var RemoveSourceConnectionFromWarehouseV1Output = (function () {
    function RemoveSourceConnectionFromWarehouseV1Output() {
    }
    RemoveSourceConnectionFromWarehouseV1Output.getAttributeTypeMap = function () {
        return RemoveSourceConnectionFromWarehouseV1Output.attributeTypeMap;
    };
    RemoveSourceConnectionFromWarehouseV1Output.discriminator = undefined;
    RemoveSourceConnectionFromWarehouseV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveSourceConnectionFromWarehouseV1Output.StatusEnum',
        },
    ];
    return RemoveSourceConnectionFromWarehouseV1Output;
}());
exports.RemoveSourceConnectionFromWarehouseV1Output = RemoveSourceConnectionFromWarehouseV1Output;
(function (RemoveSourceConnectionFromWarehouseV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveSourceConnectionFromWarehouseV1Output.StatusEnum || (RemoveSourceConnectionFromWarehouseV1Output.StatusEnum = {}));
})(RemoveSourceConnectionFromWarehouseV1Output = exports.RemoveSourceConnectionFromWarehouseV1Output || (exports.RemoveSourceConnectionFromWarehouseV1Output = {}));
exports.RemoveSourceConnectionFromWarehouseV1Output = RemoveSourceConnectionFromWarehouseV1Output;
//# sourceMappingURL=removeSourceConnectionFromWarehouseV1Output.js.map