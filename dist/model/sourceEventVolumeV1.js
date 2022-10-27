"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceEventVolumeV1 = void 0;
var SourceEventVolumeV1 = (function () {
    function SourceEventVolumeV1() {
    }
    SourceEventVolumeV1.getAttributeTypeMap = function () {
        return SourceEventVolumeV1.attributeTypeMap;
    };
    SourceEventVolumeV1.discriminator = undefined;
    SourceEventVolumeV1.attributeTypeMap = [
        {
            name: 'source',
            baseName: 'source',
            type: 'Source',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'string',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'series',
            baseName: 'series',
            type: 'Array<SourceEventVolumeDatapointV1>',
        },
    ];
    return SourceEventVolumeV1;
}());
exports.SourceEventVolumeV1 = SourceEventVolumeV1;
//# sourceMappingURL=sourceEventVolumeV1.js.map