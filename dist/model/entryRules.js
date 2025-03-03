"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryRules = void 0;
var EntryRules = (function () {
    function EntryRules() {
    }
    EntryRules.getAttributeTypeMap = function () {
        return EntryRules.attributeTypeMap;
    };
    EntryRules.discriminator = undefined;
    EntryRules.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'EntryRules.TypeEnum',
        },
        {
            name: 'concurrency',
            baseName: 'concurrency',
            type: 'ConcurrencyConfig',
        },
    ];
    return EntryRules;
}());
exports.EntryRules = EntryRules;
(function (EntryRules) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["MULTIPLE"] = 'MULTIPLE'] = "MULTIPLE";
        TypeEnum[TypeEnum["ONCE"] = 'ONCE'] = "ONCE";
        TypeEnum[TypeEnum["RE_ENTRY_AFTER_EXIT"] = 'RE_ENTRY_AFTER_EXIT'] = "RE_ENTRY_AFTER_EXIT";
    })(TypeEnum = EntryRules.TypeEnum || (EntryRules.TypeEnum = {}));
})(EntryRules = exports.EntryRules || (exports.EntryRules = {}));
exports.EntryRules = EntryRules;
//# sourceMappingURL=entryRules.js.map