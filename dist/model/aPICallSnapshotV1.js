"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APICallSnapshotV1 = void 0;
var APICallSnapshotV1 = (function () {
    function APICallSnapshotV1() {
    }
    APICallSnapshotV1.getAttributeTypeMap = function () {
        return APICallSnapshotV1.attributeTypeMap;
    };
    APICallSnapshotV1.discriminator = undefined;
    APICallSnapshotV1.attributeTypeMap = [
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
    return APICallSnapshotV1;
}());
exports.APICallSnapshotV1 = APICallSnapshotV1;
//# sourceMappingURL=aPICallSnapshotV1.js.map