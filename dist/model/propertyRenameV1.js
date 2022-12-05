"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRenameV1 = void 0;
var PropertyRenameV1 = (function () {
    function PropertyRenameV1() {
    }
    PropertyRenameV1.getAttributeTypeMap = function () {
        return PropertyRenameV1.attributeTypeMap;
    };
    PropertyRenameV1.discriminator = undefined;
    PropertyRenameV1.attributeTypeMap = [
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
    return PropertyRenameV1;
}());
exports.PropertyRenameV1 = PropertyRenameV1;
//# sourceMappingURL=propertyRenameV1.js.map