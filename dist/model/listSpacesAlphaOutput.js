"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpacesAlphaOutput = void 0;
var ListSpacesAlphaOutput = (function () {
    function ListSpacesAlphaOutput() {
    }
    ListSpacesAlphaOutput.getAttributeTypeMap = function () {
        return ListSpacesAlphaOutput.attributeTypeMap;
    };
    ListSpacesAlphaOutput.discriminator = undefined;
    ListSpacesAlphaOutput.attributeTypeMap = [
        {
            name: 'spaces',
            baseName: 'spaces',
            type: 'Array<Space>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListSpacesAlphaOutput;
}());
exports.ListSpacesAlphaOutput = ListSpacesAlphaOutput;
//# sourceMappingURL=listSpacesAlphaOutput.js.map