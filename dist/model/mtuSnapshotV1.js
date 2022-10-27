"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtuSnapshotV1 = void 0;
var MtuSnapshotV1 = (function () {
    function MtuSnapshotV1() {
    }
    MtuSnapshotV1.getAttributeTypeMap = function () {
        return MtuSnapshotV1.attributeTypeMap;
    };
    MtuSnapshotV1.discriminator = undefined;
    MtuSnapshotV1.attributeTypeMap = [
        {
            name: 'periodStart',
            baseName: 'periodStart',
            type: 'number',
        },
        {
            name: 'periodEnd',
            baseName: 'periodEnd',
            type: 'number',
        },
        {
            name: 'anonymous',
            baseName: 'anonymous',
            type: 'string',
        },
        {
            name: 'anonymousIdentified',
            baseName: 'anonymousIdentified',
            type: 'string',
        },
        {
            name: 'identified',
            baseName: 'identified',
            type: 'string',
        },
        {
            name: 'neverIdentified',
            baseName: 'neverIdentified',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
    ];
    return MtuSnapshotV1;
}());
exports.MtuSnapshotV1 = MtuSnapshotV1;
//# sourceMappingURL=mtuSnapshotV1.js.map