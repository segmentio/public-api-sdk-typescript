"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewDestinationFilterV1Input = void 0;
var PreviewDestinationFilterV1Input = (function () {
    function PreviewDestinationFilterV1Input() {
    }
    PreviewDestinationFilterV1Input.getAttributeTypeMap = function () {
        return PreviewDestinationFilterV1Input.attributeTypeMap;
    };
    PreviewDestinationFilterV1Input.discriminator = undefined;
    PreviewDestinationFilterV1Input.attributeTypeMap = [
        {
            name: 'filter',
            baseName: 'filter',
            type: 'Filter',
        },
        {
            name: 'payload',
            baseName: 'payload',
            type: '{ [key: string]: any; }',
        },
    ];
    return PreviewDestinationFilterV1Input;
}());
exports.PreviewDestinationFilterV1Input = PreviewDestinationFilterV1Input;
//# sourceMappingURL=previewDestinationFilterV1Input.js.map