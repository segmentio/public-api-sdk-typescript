"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
var RequestError = (function () {
    function RequestError() {
    }
    RequestError.getAttributeTypeMap = function () {
        return RequestError.attributeTypeMap;
    };
    RequestError.discriminator = undefined;
    RequestError.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'field',
            baseName: 'field',
            type: 'string',
        },
        {
            name: 'data',
            baseName: 'data',
            type: 'any',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'number',
        },
    ];
    return RequestError;
}());
exports.RequestError = RequestError;
//# sourceMappingURL=requestError.js.map