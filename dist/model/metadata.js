"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
var Metadata = (function () {
    function Metadata() {
    }
    Metadata.getAttributeTypeMap = function () {
        return Metadata.attributeTypeMap;
    };
    Metadata.discriminator = undefined;
    Metadata.attributeTypeMap = [
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
    return Metadata;
}());
exports.Metadata = Metadata;
//# sourceMappingURL=metadata.js.map