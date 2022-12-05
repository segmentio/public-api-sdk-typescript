"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewDestinationFilterV1Output = void 0;
var PreviewDestinationFilterV1Output = (function () {
    function PreviewDestinationFilterV1Output() {
    }
    PreviewDestinationFilterV1Output.getAttributeTypeMap = function () {
        return PreviewDestinationFilterV1Output.attributeTypeMap;
    };
    PreviewDestinationFilterV1Output.discriminator = undefined;
    PreviewDestinationFilterV1Output.attributeTypeMap = [
        {
            name: 'inputPayload',
            baseName: 'inputPayload',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'result',
            baseName: 'result',
            type: 'object',
        },
    ];
    return PreviewDestinationFilterV1Output;
}());
exports.PreviewDestinationFilterV1Output = PreviewDestinationFilterV1Output;
//# sourceMappingURL=previewDestinationFilterV1Output.js.map