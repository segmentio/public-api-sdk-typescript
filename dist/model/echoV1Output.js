"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoV1Output = void 0;
var EchoV1Output = (function () {
    function EchoV1Output() {
    }
    EchoV1Output.getAttributeTypeMap = function () {
        return EchoV1Output.attributeTypeMap;
    };
    EchoV1Output.discriminator = undefined;
    EchoV1Output.attributeTypeMap = [
        {
            name: 'method',
            baseName: 'method',
            type: 'EchoV1Output.MethodEnum',
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
    return EchoV1Output;
}());
exports.EchoV1Output = EchoV1Output;
(function (EchoV1Output) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["get"] = 'get'] = "get";
        MethodEnum[MethodEnum["post"] = 'post'] = "post";
    })(MethodEnum = EchoV1Output.MethodEnum || (EchoV1Output.MethodEnum = {}));
})(EchoV1Output = exports.EchoV1Output || (exports.EchoV1Output = {}));
exports.EchoV1Output = EchoV1Output;
//# sourceMappingURL=echoV1Output.js.map