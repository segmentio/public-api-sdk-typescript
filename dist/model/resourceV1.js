"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceV1 = void 0;
var ResourceV1 = (function () {
    function ResourceV1() {
    }
    ResourceV1.getAttributeTypeMap = function () {
        return ResourceV1.attributeTypeMap;
    };
    ResourceV1.discriminator = undefined;
    ResourceV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'ResourceV1.TypeEnum',
        },
    ];
    return ResourceV1;
}());
exports.ResourceV1 = ResourceV1;
(function (ResourceV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["FUNCTION"] = 'FUNCTION'] = "FUNCTION";
        TypeEnum[TypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
        TypeEnum[TypeEnum["SPACE"] = 'SPACE'] = "SPACE";
        TypeEnum[TypeEnum["WAREHOUSE"] = 'WAREHOUSE'] = "WAREHOUSE";
        TypeEnum[TypeEnum["WORKSPACE"] = 'WORKSPACE'] = "WORKSPACE";
    })(TypeEnum = ResourceV1.TypeEnum || (ResourceV1.TypeEnum = {}));
})(ResourceV1 = exports.ResourceV1 || (exports.ResourceV1 = {}));
exports.ResourceV1 = ResourceV1;
//# sourceMappingURL=resourceV1.js.map