"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInner = void 0;
var ErrorsInner = (function () {
    function ErrorsInner() {
    }
    ErrorsInner.getAttributeTypeMap = function () {
        return ErrorsInner.attributeTypeMap;
    };
    ErrorsInner.discriminator = undefined;
    ErrorsInner.attributeTypeMap = [
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
    ];
    return ErrorsInner;
}());
exports.ErrorsInner = ErrorsInner;
//# sourceMappingURL=errorsInner.js.map