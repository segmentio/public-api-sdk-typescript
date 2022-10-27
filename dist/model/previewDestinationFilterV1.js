"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewDestinationFilterV1 = void 0;
var PreviewDestinationFilterV1 = (function () {
    function PreviewDestinationFilterV1() {
    }
    PreviewDestinationFilterV1.getAttributeTypeMap = function () {
        return PreviewDestinationFilterV1.attributeTypeMap;
    };
    PreviewDestinationFilterV1.discriminator = undefined;
    PreviewDestinationFilterV1.attributeTypeMap = [
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
    return PreviewDestinationFilterV1;
}());
exports.PreviewDestinationFilterV1 = PreviewDestinationFilterV1;
//# sourceMappingURL=previewDestinationFilterV1.js.map