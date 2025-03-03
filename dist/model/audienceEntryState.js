"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceEntryState = void 0;
var AudienceEntryState = (function () {
    function AudienceEntryState() {
    }
    AudienceEntryState.getAttributeTypeMap = function () {
        return AudienceEntryState.attributeTypeMap;
    };
    AudienceEntryState.discriminator = undefined;
    AudienceEntryState.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'AudienceEntryState.TypeEnum',
        },
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<Transitions>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];
    return AudienceEntryState;
}());
exports.AudienceEntryState = AudienceEntryState;
(function (AudienceEntryState) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["AUDIENCE_ENTRY"] = 'AUDIENCE_ENTRY'] = "AUDIENCE_ENTRY";
    })(TypeEnum = AudienceEntryState.TypeEnum || (AudienceEntryState.TypeEnum = {}));
})(AudienceEntryState = exports.AudienceEntryState || (exports.AudienceEntryState = {}));
exports.AudienceEntryState = AudienceEntryState;
//# sourceMappingURL=audienceEntryState.js.map