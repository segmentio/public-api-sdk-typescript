"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var Label = (function () {
    function Label() {
    }
    Label.getAttributeTypeMap = function () {
        return Label.attributeTypeMap;
    };
    Label.discriminator = undefined;
    Label.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'value',
            baseName: 'value',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];
    return Label;
}());
exports.Label = Label;
//# sourceMappingURL=label.js.map