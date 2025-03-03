"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyVersionOutput = void 0;
var JourneyVersionOutput = (function () {
    function JourneyVersionOutput() {
    }
    JourneyVersionOutput.getAttributeTypeMap = function () {
        return JourneyVersionOutput.attributeTypeMap;
    };
    JourneyVersionOutput.discriminator = undefined;
    JourneyVersionOutput.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'JourneyVersionOutput.StatusEnum',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'JourneyDefinition',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'updatedBy',
            baseName: 'updatedBy',
            type: 'string',
        },
    ];
    return JourneyVersionOutput;
}());
exports.JourneyVersionOutput = JourneyVersionOutput;
(function (JourneyVersionOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ARCHIVED"] = 'ARCHIVED'] = "ARCHIVED";
        StatusEnum[StatusEnum["DRAFT"] = 'DRAFT'] = "DRAFT";
        StatusEnum[StatusEnum["ENTRY_PAUSED"] = 'ENTRY_PAUSED'] = "ENTRY_PAUSED";
        StatusEnum[StatusEnum["PUBLISHED"] = 'PUBLISHED'] = "PUBLISHED";
    })(StatusEnum = JourneyVersionOutput.StatusEnum || (JourneyVersionOutput.StatusEnum = {}));
})(JourneyVersionOutput = exports.JourneyVersionOutput || (exports.JourneyVersionOutput = {}));
exports.JourneyVersionOutput = JourneyVersionOutput;
//# sourceMappingURL=journeyVersionOutput.js.map