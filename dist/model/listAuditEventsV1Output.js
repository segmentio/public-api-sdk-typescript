"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuditEventsV1Output = void 0;
var ListAuditEventsV1Output = (function () {
    function ListAuditEventsV1Output() {
    }
    ListAuditEventsV1Output.getAttributeTypeMap = function () {
        return ListAuditEventsV1Output.attributeTypeMap;
    };
    ListAuditEventsV1Output.discriminator = undefined;
    ListAuditEventsV1Output.attributeTypeMap = [
        {
            name: 'events',
            baseName: 'events',
            type: 'Array<AuditEventV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListAuditEventsV1Output;
}());
exports.ListAuditEventsV1Output = ListAuditEventsV1Output;
//# sourceMappingURL=listAuditEventsV1Output.js.map