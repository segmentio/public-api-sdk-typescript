"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataPlatformsV1 = void 0;
var DestinationMetadataPlatformsV1 = (function () {
    function DestinationMetadataPlatformsV1() {
    }
    DestinationMetadataPlatformsV1.getAttributeTypeMap = function () {
        return DestinationMetadataPlatformsV1.attributeTypeMap;
    };
    DestinationMetadataPlatformsV1.discriminator = undefined;
    DestinationMetadataPlatformsV1.attributeTypeMap = [
        {
            name: 'browser',
            baseName: 'browser',
            type: 'boolean',
        },
        {
            name: 'server',
            baseName: 'server',
            type: 'boolean',
        },
        {
            name: 'mobile',
            baseName: 'mobile',
            type: 'boolean',
        },
    ];
    return DestinationMetadataPlatformsV1;
}());
exports.DestinationMetadataPlatformsV1 = DestinationMetadataPlatformsV1;
//# sourceMappingURL=destinationMetadataPlatformsV1.js.map