"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
var Source = (function () {
    function Source() {
    }
    Source.getAttributeTypeMap = function () {
        return Source.attributeTypeMap;
    };
    Source.discriminator = undefined;
    Source.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
    ];
    return Source;
}());
exports.Source = Source;
//# sourceMappingURL=source.js.map