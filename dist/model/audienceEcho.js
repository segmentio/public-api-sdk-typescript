"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceEcho = void 0;
var AudienceEcho = (function () {
    function AudienceEcho() {
    }
    AudienceEcho.getAttributeTypeMap = function () {
        return AudienceEcho.attributeTypeMap;
    };
    AudienceEcho.discriminator = undefined;
    AudienceEcho.attributeTypeMap = [
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
    ];
    return AudienceEcho;
}());
exports.AudienceEcho = AudienceEcho;
//# sourceMappingURL=audienceEcho.js.map