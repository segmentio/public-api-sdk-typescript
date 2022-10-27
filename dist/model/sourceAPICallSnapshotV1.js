"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceAPICallSnapshotV1 = void 0;
var SourceAPICallSnapshotV1 = (function () {
    function SourceAPICallSnapshotV1() {
    }
    SourceAPICallSnapshotV1.getAttributeTypeMap = function () {
        return SourceAPICallSnapshotV1.attributeTypeMap;
    };
    SourceAPICallSnapshotV1.discriminator = undefined;
    SourceAPICallSnapshotV1.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'apiCalls',
            baseName: 'apiCalls',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
    ];
    return SourceAPICallSnapshotV1;
}());
exports.SourceAPICallSnapshotV1 = SourceAPICallSnapshotV1;
//# sourceMappingURL=sourceAPICallSnapshotV1.js.map