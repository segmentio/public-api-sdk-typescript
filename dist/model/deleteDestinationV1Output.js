"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDestinationV1Output = void 0;
var DeleteDestinationV1Output = (function () {
    function DeleteDestinationV1Output() {
    }
    DeleteDestinationV1Output.getAttributeTypeMap = function () {
        return DeleteDestinationV1Output.attributeTypeMap;
    };
    DeleteDestinationV1Output.discriminator = undefined;
    DeleteDestinationV1Output.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'DeleteDestinationV1Output.StatusEnum',
        },
    ];
    return DeleteDestinationV1Output;
}());
exports.DeleteDestinationV1Output = DeleteDestinationV1Output;
(function (DeleteDestinationV1Output) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = DeleteDestinationV1Output.StatusEnum || (DeleteDestinationV1Output.StatusEnum = {}));
})(DeleteDestinationV1Output = exports.DeleteDestinationV1Output || (exports.DeleteDestinationV1Output = {}));
exports.DeleteDestinationV1Output = DeleteDestinationV1Output;
//# sourceMappingURL=deleteDestinationV1Output.js.map