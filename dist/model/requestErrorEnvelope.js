"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestErrorEnvelope = void 0;
var RequestErrorEnvelope = (function () {
    function RequestErrorEnvelope() {
    }
    RequestErrorEnvelope.getAttributeTypeMap = function () {
        return RequestErrorEnvelope.attributeTypeMap;
    };
    RequestErrorEnvelope.discriminator = undefined;
    RequestErrorEnvelope.attributeTypeMap = [
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<RequestError>',
        },
    ];
    return RequestErrorEnvelope;
}());
exports.RequestErrorEnvelope = RequestErrorEnvelope;
//# sourceMappingURL=requestErrorEnvelope.js.map