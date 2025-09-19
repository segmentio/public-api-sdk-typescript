"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDSyncOptions = void 0;
var IDSyncOptions = (function () {
    function IDSyncOptions() {
    }
    IDSyncOptions.getAttributeTypeMap = function () {
        return IDSyncOptions.attributeTypeMap;
    };
    IDSyncOptions.discriminator = undefined;
    IDSyncOptions.attributeTypeMap = [
        {
            name: 'triggerOn',
            baseName: 'triggerOn',
            type: 'Array<IDSyncOptions.TriggerOnEnum>',
        },
        {
            name: 'ids',
            baseName: 'ids',
            type: '{ [key: string]: any; }',
        },
    ];
    return IDSyncOptions;
}());
exports.IDSyncOptions = IDSyncOptions;
(function (IDSyncOptions) {
    var TriggerOnEnum;
    (function (TriggerOnEnum) {
        TriggerOnEnum[TriggerOnEnum["any"] = 'any'] = "any";
        TriggerOnEnum[TriggerOnEnum["audience_exited"] = 'audience_exited'] = "audience_exited";
        TriggerOnEnum[TriggerOnEnum["audience_joined"] = 'audience_joined'] = "audience_joined";
        TriggerOnEnum[TriggerOnEnum["new_external_id_added"] = 'new_external_id_added'] = "new_external_id_added";
    })(TriggerOnEnum = IDSyncOptions.TriggerOnEnum || (IDSyncOptions.TriggerOnEnum = {}));
})(IDSyncOptions = exports.IDSyncOptions || (exports.IDSyncOptions = {}));
exports.IDSyncOptions = IDSyncOptions;
//# sourceMappingURL=iDSyncOptions.js.map