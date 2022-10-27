"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSubscriptionResponseError = void 0;
var MessageSubscriptionResponseError = (function () {
    function MessageSubscriptionResponseError() {
    }
    MessageSubscriptionResponseError.getAttributeTypeMap = function () {
        return MessageSubscriptionResponseError.attributeTypeMap;
    };
    MessageSubscriptionResponseError.discriminator = undefined;
    MessageSubscriptionResponseError.attributeTypeMap = [
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
    ];
    return MessageSubscriptionResponseError;
}());
exports.MessageSubscriptionResponseError = MessageSubscriptionResponseError;
//# sourceMappingURL=messageSubscriptionResponseError.js.map