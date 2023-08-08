"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSubscriptionStatusResponse = void 0;
var GroupSubscriptionStatusResponse = (function () {
    function GroupSubscriptionStatusResponse() {
    }
    GroupSubscriptionStatusResponse.getAttributeTypeMap = function () {
        return GroupSubscriptionStatusResponse.attributeTypeMap;
    };
    GroupSubscriptionStatusResponse.discriminator = undefined;
    GroupSubscriptionStatusResponse.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'GroupSubscriptionStatusResponse.StatusEnum',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return GroupSubscriptionStatusResponse;
}());
exports.GroupSubscriptionStatusResponse = GroupSubscriptionStatusResponse;
(function (GroupSubscriptionStatusResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = GroupSubscriptionStatusResponse.StatusEnum || (GroupSubscriptionStatusResponse.StatusEnum = {}));
})(GroupSubscriptionStatusResponse = exports.GroupSubscriptionStatusResponse || (exports.GroupSubscriptionStatusResponse = {}));
exports.GroupSubscriptionStatusResponse = GroupSubscriptionStatusResponse;
//# sourceMappingURL=groupSubscriptionStatusResponse.js.map