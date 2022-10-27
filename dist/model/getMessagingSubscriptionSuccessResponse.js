"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessagingSubscriptionSuccessResponse = void 0;
var GetMessagingSubscriptionSuccessResponse = (function () {
    function GetMessagingSubscriptionSuccessResponse() {
    }
    GetMessagingSubscriptionSuccessResponse.getAttributeTypeMap = function () {
        return GetMessagingSubscriptionSuccessResponse.attributeTypeMap;
    };
    GetMessagingSubscriptionSuccessResponse.discriminator = undefined;
    GetMessagingSubscriptionSuccessResponse.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'GetMessagingSubscriptionSuccessResponse.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'GetMessagingSubscriptionSuccessResponse.StatusEnum',
        },
    ];
    return GetMessagingSubscriptionSuccessResponse;
}());
exports.GetMessagingSubscriptionSuccessResponse = GetMessagingSubscriptionSuccessResponse;
(function (GetMessagingSubscriptionSuccessResponse) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        TypeEnum[TypeEnum["SMS"] = 'SMS'] = "SMS";
    })(TypeEnum = GetMessagingSubscriptionSuccessResponse.TypeEnum || (GetMessagingSubscriptionSuccessResponse.TypeEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = GetMessagingSubscriptionSuccessResponse.StatusEnum || (GetMessagingSubscriptionSuccessResponse.StatusEnum = {}));
})(GetMessagingSubscriptionSuccessResponse = exports.GetMessagingSubscriptionSuccessResponse || (exports.GetMessagingSubscriptionSuccessResponse = {}));
exports.GetMessagingSubscriptionSuccessResponse = GetMessagingSubscriptionSuccessResponse;
//# sourceMappingURL=getMessagingSubscriptionSuccessResponse.js.map