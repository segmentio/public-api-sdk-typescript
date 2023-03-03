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
            name: 'status',
            baseName: 'status',
            type: 'HandleWebhookOutput.StatusEnum',
        },
    ];
    return HandleWebhookOutput;
}());
exports.HandleWebhookOutput = HandleWebhookOutput;
(function (HandleWebhookOutput) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["SUCCESS"] = 'SUCCESS'] = "SUCCESS";
    })(StatusEnum = HandleWebhookOutput.StatusEnum || (HandleWebhookOutput.StatusEnum = {}));
})(HandleWebhookOutput = exports.HandleWebhookOutput || (exports.HandleWebhookOutput = {}));
exports.HandleWebhookOutput = HandleWebhookOutput;
//# sourceMappingURL=handleWebhookOutput.js.map