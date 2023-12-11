"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReverseETLManualSyncInput = void 0;
var CreateReverseETLManualSyncInput = (function () {
    function CreateReverseETLManualSyncInput() {
    }
    CreateReverseETLManualSyncInput.getAttributeTypeMap = function () {
        return CreateReverseETLManualSyncInput.attributeTypeMap;
    };
    CreateReverseETLManualSyncInput.discriminator = undefined;
    CreateReverseETLManualSyncInput.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'subscriptionId',
            baseName: 'subscriptionId',
            type: 'string',
        },
    ];
    return CreateReverseETLManualSyncInput;
}());
exports.CreateReverseETLManualSyncInput = CreateReverseETLManualSyncInput;
//# sourceMappingURL=createReverseETLManualSyncInput.js.map