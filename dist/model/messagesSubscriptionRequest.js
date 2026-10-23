"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesSubscriptionRequest = void 0;
var MessagesSubscriptionRequest = (function () {
    function MessagesSubscriptionRequest() {
    }
    MessagesSubscriptionRequest.getAttributeTypeMap = function () {
        return MessagesSubscriptionRequest.attributeTypeMap;
    };
    MessagesSubscriptionRequest.discriminator = undefined;
    MessagesSubscriptionRequest.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'MessagesSubscriptionRequest.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'MessagesSubscriptionRequest.StatusEnum',
        },
        {
            name: 'groups',
            baseName: 'groups',
            type: 'Array<GroupSubscriptionStatus>',
        },
    ];
    return MessagesSubscriptionRequest;
}());
exports.MessagesSubscriptionRequest = MessagesSubscriptionRequest;
(function (MessagesSubscriptionRequest) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ANDROID_PUSH"] = 'ANDROID_PUSH'] = "ANDROID_PUSH";
        TypeEnum[TypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        TypeEnum[TypeEnum["IOS_PUSH"] = 'IOS_PUSH'] = "IOS_PUSH";
        TypeEnum[TypeEnum["SMS"] = 'SMS'] = "SMS";
        TypeEnum[TypeEnum["WHATSAPP"] = 'WHATSAPP'] = "WHATSAPP";
    })(TypeEnum = MessagesSubscriptionRequest.TypeEnum || (MessagesSubscriptionRequest.TypeEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = MessagesSubscriptionRequest.StatusEnum || (MessagesSubscriptionRequest.StatusEnum = {}));
})(MessagesSubscriptionRequest = exports.MessagesSubscriptionRequest || (exports.MessagesSubscriptionRequest = {}));
exports.MessagesSubscriptionRequest = MessagesSubscriptionRequest;
//# sourceMappingURL=messagesSubscriptionRequest.js.map