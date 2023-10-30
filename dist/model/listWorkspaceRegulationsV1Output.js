"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkspaceRegulationsV1Output = void 0;
var ListWorkspaceRegulationsV1Output = (function () {
    function ListWorkspaceRegulationsV1Output() {
    }
    ListWorkspaceRegulationsV1Output.getAttributeTypeMap = function () {
        return ListWorkspaceRegulationsV1Output.attributeTypeMap;
    };
    ListWorkspaceRegulationsV1Output.discriminator = undefined;
    ListWorkspaceRegulationsV1Output.attributeTypeMap = [
        {
            name: 'regulations',
            baseName: 'regulations',
            type: 'Array<RegulationListEntryV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListWorkspaceRegulationsV1Output;
}());
exports.ListWorkspaceRegulationsV1Output = ListWorkspaceRegulationsV1Output;
//# sourceMappingURL=listWorkspaceRegulationsV1Output.js.map