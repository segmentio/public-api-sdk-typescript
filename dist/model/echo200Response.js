"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Echo200Response = void 0;
var Echo200Response = (function () {
    function Echo200Response() {
    }
    Echo200Response.getAttributeTypeMap = function () {
        return Echo200Response.attributeTypeMap;
    };
    Echo200Response.discriminator = undefined;
    Echo200Response.attributeTypeMap = [
        {
            name: 'data',
            baseName: 'data',
            type: 'EchoV1Output',
        },
    ];
    return Echo200Response;
}());
exports.Echo200Response = Echo200Response;
//# sourceMappingURL=echo200Response.js.map