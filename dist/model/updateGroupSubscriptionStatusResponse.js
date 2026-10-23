"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupSubscriptionStatusResponse = void 0;
var UpdateGroupSubscriptionStatusResponse = (function () {
    function UpdateGroupSubscriptionStatusResponse() {
    }
    UpdateGroupSubscriptionStatusResponse.getAttributeTypeMap = function () {
        return UpdateGroupSubscriptionStatusResponse.attributeTypeMap;
    };
    UpdateGroupSubscriptionStatusResponse.discriminator = undefined;
    UpdateGroupSubscriptionStatusResponse.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateGroupSubscriptionStatusResponse.StatusEnum',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
    ];
    return UpdateGroupSubscriptionStatusResponse;
}());
exports.UpdateGroupSubscriptionStatusResponse = UpdateGroupSubscriptionStatusResponse;
(function (UpdateGroupSubscriptionStatusResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = UpdateGroupSubscriptionStatusResponse.StatusEnum || (UpdateGroupSubscriptionStatusResponse.StatusEnum = {}));
})(UpdateGroupSubscriptionStatusResponse = exports.UpdateGroupSubscriptionStatusResponse || (exports.UpdateGroupSubscriptionStatusResponse = {}));
exports.UpdateGroupSubscriptionStatusResponse = UpdateGroupSubscriptionStatusResponse;
//# sourceMappingURL=updateGroupSubscriptionStatusResponse.js.map