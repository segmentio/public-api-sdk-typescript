"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFilterFromDestinationV1Output = void 0;
var RemoveFilterFromDestinationV1Output = (function () {
    function RemoveFilterFromDestinationV1Output() {
    }
    RemoveFilterFromDestinationV1Output.getAttributeTypeMap = function () {
        return RemoveFilterFromDestinationV1Output.attributeTypeMap;
    };
    RemoveFilterFromDestinationV1Output.discriminator = undefined;
    RemoveFilterFromDestinationV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveFilterFromDestinationV1Output.StatusEnum',
        },
    ];
    return RemoveFilterFromDestinationV1Output;
}());
exports.RemoveFilterFromDestinationV1Output = RemoveFilterFromDestinationV1Output;
(function (RemoveFilterFromDestinationV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveFilterFromDestinationV1Output.StatusEnum || (RemoveFilterFromDestinationV1Output.StatusEnum = {}));
})(RemoveFilterFromDestinationV1Output = exports.RemoveFilterFromDestinationV1Output || (exports.RemoveFilterFromDestinationV1Output = {}));
exports.RemoveFilterFromDestinationV1Output = RemoveFilterFromDestinationV1Output;
//# sourceMappingURL=removeFilterFromDestinationV1Output.js.map