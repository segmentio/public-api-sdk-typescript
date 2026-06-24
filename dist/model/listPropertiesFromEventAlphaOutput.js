"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPropertiesFromEventAlphaOutput = void 0;
var ListPropertiesFromEventAlphaOutput = (function () {
    function ListPropertiesFromEventAlphaOutput() {
    }
    ListPropertiesFromEventAlphaOutput.getAttributeTypeMap = function () {
        return ListPropertiesFromEventAlphaOutput.attributeTypeMap;
    };
    ListPropertiesFromEventAlphaOutput.discriminator = undefined;
    ListPropertiesFromEventAlphaOutput.attributeTypeMap = [
        {
            name: 'eventProperties',
            baseName: 'eventProperties',
            type: 'Array<EventPropertyAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListPropertiesFromEventAlphaOutput;
}());
exports.ListPropertiesFromEventAlphaOutput = ListPropertiesFromEventAlphaOutput;
//# sourceMappingURL=listPropertiesFromEventAlphaOutput.js.map