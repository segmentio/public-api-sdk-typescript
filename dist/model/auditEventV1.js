"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEventV1 = void 0;
var AuditEventV1 = (function () {
    function AuditEventV1() {
    }
    AuditEventV1.getAttributeTypeMap = function () {
        return AuditEventV1.attributeTypeMap;
    };
    AuditEventV1.discriminator = undefined;
    AuditEventV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'actor',
            baseName: 'actor',
            type: 'string',
        },
        {
            name: 'actorEmail',
            baseName: 'actorEmail',
            type: 'string',
        },
        {
            name: 'resourceId',
            baseName: 'resourceId',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'string',
        },
        {
            name: 'resourceName',
            baseName: 'resourceName',
            type: 'string',
        },
    ];
    return AuditEventV1;
}());
exports.AuditEventV1 = AuditEventV1;
//# sourceMappingURL=auditEventV1.js.map