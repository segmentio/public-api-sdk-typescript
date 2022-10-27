"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRenameBeta = void 0;
var PropertyRenameBeta = (function () {
    function PropertyRenameBeta() {
    }
    PropertyRenameBeta.getAttributeTypeMap = function () {
        return PropertyRenameBeta.attributeTypeMap;
    };
    PropertyRenameBeta.discriminator = undefined;
    PropertyRenameBeta.attributeTypeMap = [
        {
            name: 'oldName',
            baseName: 'oldName',
            type: 'string',
        },
        {
            name: 'newName',
            baseName: 'newName',
            type: 'string',
        },
    ];
    return PropertyRenameBeta;
}());
exports.PropertyRenameBeta = PropertyRenameBeta;
//# sourceMappingURL=propertyRenameBeta.js.map