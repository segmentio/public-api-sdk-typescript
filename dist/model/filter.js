"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var Filter = (function () {
    function Filter() {
    }
    Filter.getAttributeTypeMap = function () {
        return Filter.attributeTypeMap;
    };
    Filter.discriminator = undefined;
    Filter.attributeTypeMap = [
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationFilterActionV1>',
        },
    ];
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map