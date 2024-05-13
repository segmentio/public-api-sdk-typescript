"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definition = void 0;
var Definition = (function () {
    function Definition() {
    }
    Definition.getAttributeTypeMap = function () {
        return Definition.attributeTypeMap;
    };
    Definition.discriminator = undefined;
    Definition.attributeTypeMap = [
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];
    return Definition;
}());
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map