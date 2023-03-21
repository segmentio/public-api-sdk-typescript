"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleWebhookOutput = void 0;
var HandleWebhookOutput = (function () {
    function HandleWebhookOutput() {
    }
    HandleWebhookOutput.getAttributeTypeMap = function () {
        return HandleWebhookOutput.attributeTypeMap;
    };
    HandleWebhookOutput.discriminator = undefined;
    HandleWebhookOutput.attributeTypeMap = [
        {
            name: 'statusCode',
            baseName: 'statusCode',
            type: 'number',
        },
        {
            name: 'success',
            baseName: 'success',
            type: 'boolean',
        },
    ];
    return HandleWebhookOutput;
}());
exports.HandleWebhookOutput = HandleWebhookOutput;
//# sourceMappingURL=handleWebhookOutput.js.map