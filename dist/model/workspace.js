"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
var Workspace = (function () {
    function Workspace() {
    }
    Workspace.getAttributeTypeMap = function () {
        return Workspace.attributeTypeMap;
    };
    Workspace.discriminator = undefined;
    Workspace.attributeTypeMap = [
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
    return Workspace;
}());
exports.Workspace = Workspace;
//# sourceMappingURL=workspace.js.map