"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseETLManualSyncJobOutput = void 0;
var ReverseETLManualSyncJobOutput = (function () {
    function ReverseETLManualSyncJobOutput() {
    }
    ReverseETLManualSyncJobOutput.getAttributeTypeMap = function () {
        return ReverseETLManualSyncJobOutput.attributeTypeMap;
    };
    ReverseETLManualSyncJobOutput.discriminator = undefined;
    ReverseETLManualSyncJobOutput.attributeTypeMap = [
        {
            name: 'startedAt',
            baseName: 'startedAt',
            type: 'string',
        },
        {
            name: 'syncId',
            baseName: 'syncId',
            type: 'string',
        },
    ];
    return ReverseETLManualSyncJobOutput;
}());
exports.ReverseETLManualSyncJobOutput = ReverseETLManualSyncJobOutput;
//# sourceMappingURL=reverseETLManualSyncJobOutput.js.map