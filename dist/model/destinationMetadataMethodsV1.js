"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataMethodsV1 = void 0;
var DestinationMetadataMethodsV1 = (function () {
    function DestinationMetadataMethodsV1() {
    }
    DestinationMetadataMethodsV1.getAttributeTypeMap = function () {
        return DestinationMetadataMethodsV1.attributeTypeMap;
    };
    DestinationMetadataMethodsV1.discriminator = undefined;
    DestinationMetadataMethodsV1.attributeTypeMap = [
        {
            name: 'pageview',
            baseName: 'pageview',
            type: 'boolean',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'boolean',
        },
        {
            name: 'alias',
            baseName: 'alias',
            type: 'boolean',
        },
        {
            name: 'track',
            baseName: 'track',
            type: 'boolean',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'boolean',
        },
    ];
    return DestinationMetadataMethodsV1;
}());
exports.DestinationMetadataMethodsV1 = DestinationMetadataMethodsV1;
//# sourceMappingURL=destinationMetadataMethodsV1.js.map