"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceEventVolumeDatapointV1 = void 0;
var SourceEventVolumeDatapointV1 = (function () {
    function SourceEventVolumeDatapointV1() {
    }
    SourceEventVolumeDatapointV1.getAttributeTypeMap = function () {
        return SourceEventVolumeDatapointV1.attributeTypeMap;
    };
    SourceEventVolumeDatapointV1.discriminator = undefined;
    SourceEventVolumeDatapointV1.attributeTypeMap = [
        {
            name: 'time',
            baseName: 'time',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];
    return SourceEventVolumeDatapointV1;
}());
exports.SourceEventVolumeDatapointV1 = SourceEventVolumeDatapointV1;
//# sourceMappingURL=sourceEventVolumeDatapointV1.js.map