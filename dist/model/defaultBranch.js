"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultBranch = void 0;
var DefaultBranch = (function () {
    function DefaultBranch() {
    }
    DefaultBranch.getAttributeTypeMap = function () {
        return DefaultBranch.attributeTypeMap;
    };
    DefaultBranch.discriminator = undefined;
    DefaultBranch.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DefaultBranch.TypeEnum',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
    ];
    return DefaultBranch;
}());
exports.DefaultBranch = DefaultBranch;
(function (DefaultBranch) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DEFAULT"] = 'DEFAULT'] = "DEFAULT";
    })(TypeEnum = DefaultBranch.TypeEnum || (DefaultBranch.TypeEnum = {}));
})(DefaultBranch = exports.DefaultBranch || (exports.DefaultBranch = {}));
exports.DefaultBranch = DefaultBranch;
//# sourceMappingURL=defaultBranch.js.map