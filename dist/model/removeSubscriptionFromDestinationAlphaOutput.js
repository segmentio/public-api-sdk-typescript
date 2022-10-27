"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSubscriptionFromDestinationAlphaOutput = void 0;
var RemoveSubscriptionFromDestinationAlphaOutput = (function () {
    function RemoveSubscriptionFromDestinationAlphaOutput() {
    }
    RemoveSubscriptionFromDestinationAlphaOutput.getAttributeTypeMap = function () {
        return RemoveSubscriptionFromDestinationAlphaOutput.attributeTypeMap;
    };
    RemoveSubscriptionFromDestinationAlphaOutput.discriminator = undefined;
    RemoveSubscriptionFromDestinationAlphaOutput.attributeTypeMap = [
        {
            name: 'status',
            baseName: 'status',
            type: 'RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum',
        },
    ];
    return RemoveSubscriptionFromDestinationAlphaOutput;
}());
exports.RemoveSubscriptionFromDestinationAlphaOutput = RemoveSubscriptionFromDestinationAlphaOutput;
(function (RemoveSubscriptionFromDestinationAlphaOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum || (RemoveSubscriptionFromDestinationAlphaOutput.StatusEnum = {}));
})(RemoveSubscriptionFromDestinationAlphaOutput = exports.RemoveSubscriptionFromDestinationAlphaOutput || (exports.RemoveSubscriptionFromDestinationAlphaOutput = {}));
exports.RemoveSubscriptionFromDestinationAlphaOutput = RemoveSubscriptionFromDestinationAlphaOutput;
//# sourceMappingURL=removeSubscriptionFromDestinationAlphaOutput.js.map