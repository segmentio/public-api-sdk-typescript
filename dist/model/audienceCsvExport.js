"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceCsvExport = void 0;
var AudienceCsvExport = (function () {
    function AudienceCsvExport() {
    }
    AudienceCsvExport.getAttributeTypeMap = function () {
        return AudienceCsvExport.attributeTypeMap;
    };
    AudienceCsvExport.discriminator = undefined;
    AudienceCsvExport.attributeTypeMap = [
        {
            name: 'exportId',
            baseName: 'exportId',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'startedAt',
            baseName: 'startedAt',
            type: 'string',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
        {
            name: 'urls',
            baseName: 'urls',
            type: 'Array<string>',
        },
        {
            name: 'expiresAt',
            baseName: 'expiresAt',
            type: 'string',
        },
        {
            name: 'error',
            baseName: 'error',
            type: 'string',
        },
    ];
    return AudienceCsvExport;
}());
exports.AudienceCsvExport = AudienceCsvExport;
//# sourceMappingURL=audienceCsvExport.js.map