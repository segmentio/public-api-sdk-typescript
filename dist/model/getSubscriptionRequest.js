"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSubscriptionRequest = void 0;
var GetSubscriptionRequest = (function () {
    function GetSubscriptionRequest() {
    }
    GetSubscriptionRequest.getAttributeTypeMap = function () {
        return GetSubscriptionRequest.attributeTypeMap;
    };
    GetSubscriptionRequest.discriminator = undefined;
    GetSubscriptionRequest.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'GetSubscriptionRequest.TypeEnum',
        },
    ];
    return GetSubscriptionRequest;
}());
exports.GetSubscriptionRequest = GetSubscriptionRequest;
(function (GetSubscriptionRequest) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        TypeEnum[TypeEnum["SMS"] = 'SMS'] = "SMS";
    })(TypeEnum = GetSubscriptionRequest.TypeEnum || (GetSubscriptionRequest.TypeEnum = {}));
})(GetSubscriptionRequest = exports.GetSubscriptionRequest || (exports.GetSubscriptionRequest = {}));
exports.GetSubscriptionRequest = GetSubscriptionRequest;
//# sourceMappingURL=getSubscriptionRequest.js.map