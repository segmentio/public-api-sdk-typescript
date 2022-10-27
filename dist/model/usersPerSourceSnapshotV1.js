"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPerSourceSnapshotV1 = void 0;
var UsersPerSourceSnapshotV1 = (function () {
    function UsersPerSourceSnapshotV1() {
    }
    UsersPerSourceSnapshotV1.getAttributeTypeMap = function () {
        return UsersPerSourceSnapshotV1.attributeTypeMap;
    };
    UsersPerSourceSnapshotV1.discriminator = undefined;
    UsersPerSourceSnapshotV1.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
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
    return UsersPerSourceSnapshotV1;
}());
exports.UsersPerSourceSnapshotV1 = UsersPerSourceSnapshotV1;
//# sourceMappingURL=usersPerSourceSnapshotV1.js.map