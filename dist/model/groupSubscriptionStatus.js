"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSubscriptionStatus = void 0;
var GroupSubscriptionStatus = (function () {
    function GroupSubscriptionStatus() {
    }
    GroupSubscriptionStatus.getAttributeTypeMap = function () {
        return GroupSubscriptionStatus.attributeTypeMap;
    };
    GroupSubscriptionStatus.discriminator = undefined;
    GroupSubscriptionStatus.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'GroupSubscriptionStatus.StatusEnum',
        },
    ];
    return GroupSubscriptionStatus;
}());
exports.GroupSubscriptionStatus = GroupSubscriptionStatus;
(function (GroupSubscriptionStatus) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DID_NOT_SUBSCRIBE"] = 'DID_NOT_SUBSCRIBE'] = "DID_NOT_SUBSCRIBE";
        StatusEnum[StatusEnum["SUBSCRIBED"] = 'SUBSCRIBED'] = "SUBSCRIBED";
        StatusEnum[StatusEnum["UNSUBSCRIBED"] = 'UNSUBSCRIBED'] = "UNSUBSCRIBED";
    })(StatusEnum = GroupSubscriptionStatus.StatusEnum || (GroupSubscriptionStatus.StatusEnum = {}));
})(GroupSubscriptionStatus = exports.GroupSubscriptionStatus || (exports.GroupSubscriptionStatus = {}));
exports.GroupSubscriptionStatus = GroupSubscriptionStatus;
//# sourceMappingURL=groupSubscriptionStatus.js.map