"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOutBranch = void 0;
var TimeOutBranch = (function () {
    function TimeOutBranch() {
    }
    TimeOutBranch.getAttributeTypeMap = function () {
        return TimeOutBranch.attributeTypeMap;
    };
    TimeOutBranch.discriminator = undefined;
    TimeOutBranch.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TimeOutBranch.TypeEnum',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
    ];
    return TimeOutBranch;
}());
exports.TimeOutBranch = TimeOutBranch;
(function (TimeOutBranch) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["TIMEOUT"] = 'TIMEOUT'] = "TIMEOUT";
    })(TypeEnum = TimeOutBranch.TypeEnum || (TimeOutBranch.TypeEnum = {}));
})(TimeOutBranch = exports.TimeOutBranch || (exports.TimeOutBranch = {}));
exports.TimeOutBranch = TimeOutBranch;
//# sourceMappingURL=timeOutBranch.js.map