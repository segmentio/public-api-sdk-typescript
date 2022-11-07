"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogosV1 = void 0;
var LogosV1 = (function () {
    function LogosV1() {
    }
    LogosV1.getAttributeTypeMap = function () {
        return LogosV1.attributeTypeMap;
    };
    LogosV1.discriminator = undefined;
    LogosV1.attributeTypeMap = [
        {
            name: 'default',
            baseName: 'default',
            type: 'string',
        },
        {
            name: 'mark',
            baseName: 'mark',
            type: 'string',
        },
        {
            name: 'alt',
            baseName: 'alt',
            type: 'string',
        },
    ];
    return LogosV1;
}());
exports.LogosV1 = LogosV1;
//# sourceMappingURL=logosV1.js.map