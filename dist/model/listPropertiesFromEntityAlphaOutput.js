"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPropertiesFromEntityAlphaOutput = void 0;
var ListPropertiesFromEntityAlphaOutput = (function () {
    function ListPropertiesFromEntityAlphaOutput() {
    }
    ListPropertiesFromEntityAlphaOutput.getAttributeTypeMap = function () {
        return ListPropertiesFromEntityAlphaOutput.attributeTypeMap;
    };
    ListPropertiesFromEntityAlphaOutput.discriminator = undefined;
    ListPropertiesFromEntityAlphaOutput.attributeTypeMap = [
        {
            name: 'entityProperties',
            baseName: 'entityProperties',
            type: 'Array<EntityPropertyAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'ForwardOnlyPaginationOutput',
        },
    ];
    return ListPropertiesFromEntityAlphaOutput;
}());
exports.ListPropertiesFromEntityAlphaOutput = ListPropertiesFromEntityAlphaOutput;
//# sourceMappingURL=listPropertiesFromEntityAlphaOutput.js.map