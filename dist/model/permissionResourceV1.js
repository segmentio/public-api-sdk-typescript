"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionResourceV1 = void 0;
var PermissionResourceV1 = (function () {
    function PermissionResourceV1() {
    }
    PermissionResourceV1.getAttributeTypeMap = function () {
        return PermissionResourceV1.attributeTypeMap;
    };
    PermissionResourceV1.discriminator = undefined;
    PermissionResourceV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'PermissionResourceV1.TypeEnum',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<AllowedLabelBeta>',
        },
    ];
    return PermissionResourceV1;
}());
exports.PermissionResourceV1 = PermissionResourceV1;
(function (PermissionResourceV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["FUNCTION"] = 'FUNCTION'] = "FUNCTION";
        TypeEnum[TypeEnum["SOURCE"] = 'SOURCE'] = "SOURCE";
        TypeEnum[TypeEnum["SPACE"] = 'SPACE'] = "SPACE";
        TypeEnum[TypeEnum["WAREHOUSE"] = 'WAREHOUSE'] = "WAREHOUSE";
        TypeEnum[TypeEnum["WORKSPACE"] = 'WORKSPACE'] = "WORKSPACE";
    })(TypeEnum = PermissionResourceV1.TypeEnum || (PermissionResourceV1.TypeEnum = {}));
})(PermissionResourceV1 = exports.PermissionResourceV1 || (exports.PermissionResourceV1 = {}));
exports.PermissionResourceV1 = PermissionResourceV1;
//# sourceMappingURL=permissionResourceV1.js.map