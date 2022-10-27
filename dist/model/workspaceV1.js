"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceV1 = void 0;
var WorkspaceV1 = (function () {
    function WorkspaceV1() {
    }
    WorkspaceV1.getAttributeTypeMap = function () {
        return WorkspaceV1.attributeTypeMap;
    };
    WorkspaceV1.discriminator = undefined;
    WorkspaceV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
    ];
    return WorkspaceV1;
}());
exports.WorkspaceV1 = WorkspaceV1;
//# sourceMappingURL=workspaceV1.js.map