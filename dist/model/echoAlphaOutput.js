"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoAlphaOutput = void 0;
var EchoAlphaOutput = (function () {
    function EchoAlphaOutput() {
    }
    EchoAlphaOutput.getAttributeTypeMap = function () {
        return EchoAlphaOutput.attributeTypeMap;
    };
    EchoAlphaOutput.discriminator = undefined;
    EchoAlphaOutput.attributeTypeMap = [
        {
            name: 'method',
            baseName: 'method',
            type: 'EchoAlphaOutput.MethodEnum',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'headers',
            baseName: 'headers',
            type: '{ [key: string]: any; }',
        },
    ];
    return EchoAlphaOutput;
}());
exports.EchoAlphaOutput = EchoAlphaOutput;
(function (EchoAlphaOutput) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["get"] = 'get'] = "get";
        MethodEnum[MethodEnum["post"] = 'post'] = "post";
    })(MethodEnum = EchoAlphaOutput.MethodEnum || (EchoAlphaOutput.MethodEnum = {}));
})(EchoAlphaOutput = exports.EchoAlphaOutput || (exports.EchoAlphaOutput = {}));
exports.EchoAlphaOutput = EchoAlphaOutput;
//# sourceMappingURL=echoAlphaOutput.js.map