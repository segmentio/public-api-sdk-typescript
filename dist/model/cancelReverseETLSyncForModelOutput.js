"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelReverseETLSyncForModelOutput = void 0;
var CancelReverseETLSyncForModelOutput = (function () {
    function CancelReverseETLSyncForModelOutput() {
    }
    CancelReverseETLSyncForModelOutput.getAttributeTypeMap = function () {
        return CancelReverseETLSyncForModelOutput.attributeTypeMap;
    };
    CancelReverseETLSyncForModelOutput.discriminator = undefined;
    CancelReverseETLSyncForModelOutput.attributeTypeMap = [
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'syncId',
            baseName: 'syncId',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
            type: 'string',
        },
        {
            name: 'errorMessage',
            baseName: 'errorMessage',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
    ];
    return CancelReverseETLSyncForModelOutput;
}());
exports.CancelReverseETLSyncForModelOutput = CancelReverseETLSyncForModelOutput;
//# sourceMappingURL=cancelReverseETLSyncForModelOutput.js.map