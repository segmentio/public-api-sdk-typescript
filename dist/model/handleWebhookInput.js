"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleWebhookInput = void 0;
var HandleWebhookInput = (function () {
    function HandleWebhookInput() {
    }
    HandleWebhookInput.getAttributeTypeMap = function () {
        return HandleWebhookInput.attributeTypeMap;
    };
    HandleWebhookInput.discriminator = undefined;
    HandleWebhookInput.attributeTypeMap = [
        {
            name: 'w',
            baseName: 'w',
            type: 'string',
        },
        {
            name: 'n',
            baseName: 'n',
            type: 'string',
        },
        {
            name: 't',
            baseName: 't',
            type: 'string',
        },
        {
            name: 's',
            baseName: 's',
            type: 'string',
        },
    ];
    return HandleWebhookInput;
}());
exports.HandleWebhookInput = HandleWebhookInput;
//# sourceMappingURL=handleWebhookInput.js.map