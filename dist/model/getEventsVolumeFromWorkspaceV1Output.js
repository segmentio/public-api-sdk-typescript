"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventsVolumeFromWorkspaceV1Output = void 0;
var GetEventsVolumeFromWorkspaceV1Output = (function () {
    function GetEventsVolumeFromWorkspaceV1Output() {
    }
    GetEventsVolumeFromWorkspaceV1Output.getAttributeTypeMap = function () {
        return GetEventsVolumeFromWorkspaceV1Output.attributeTypeMap;
    };
    GetEventsVolumeFromWorkspaceV1Output.discriminator = undefined;
    GetEventsVolumeFromWorkspaceV1Output.attributeTypeMap = [
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'GetEventsVolumeFromWorkspaceV1Query',
        },
        {
            name: 'result',
            baseName: 'result',
            type: 'Array<SourceEventVolumeV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return GetEventsVolumeFromWorkspaceV1Output;
}());
exports.GetEventsVolumeFromWorkspaceV1Output = GetEventsVolumeFromWorkspaceV1Output;
//# sourceMappingURL=getEventsVolumeFromWorkspaceV1Output.js.map