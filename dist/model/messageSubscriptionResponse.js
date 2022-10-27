"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSubscriptionResponse = void 0;
var MessageSubscriptionResponse = (function () {
    function MessageSubscriptionResponse() {
    }
    MessageSubscriptionResponse.getAttributeTypeMap = function () {
        return MessageSubscriptionResponse.attributeTypeMap;
    };
    MessageSubscriptionResponse.discriminator = undefined;
    MessageSubscriptionResponse.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'MessageSubscriptionResponse.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'MessageSubscriptionResponse.StatusEnum',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
    ];
    return MessageSubscriptionResponse;
}());
exports.MessageSubscriptionResponse = MessageSubscriptionResponse;
(function (MessageSubscriptionResponse) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        TypeEnum[TypeEnum["SMS"] = 'SMS'] = "SMS";
    })(TypeEnum = MessageSubscriptionResponse.TypeEnum || (MessageSubscriptionResponse.TypeEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = MessageSubscriptionResponse.StatusEnum || (MessageSubscriptionResponse.StatusEnum = {}));
})(MessageSubscriptionResponse = exports.MessageSubscriptionResponse || (exports.MessageSubscriptionResponse = {}));
exports.MessageSubscriptionResponse = MessageSubscriptionResponse;
//# sourceMappingURL=messageSubscriptionResponse.js.map