"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProfilesWarehouseInSpaceAlphaOutput = void 0;
var ListProfilesWarehouseInSpaceAlphaOutput = (function () {
    function ListProfilesWarehouseInSpaceAlphaOutput() {
    }
    ListProfilesWarehouseInSpaceAlphaOutput.getAttributeTypeMap = function () {
        return ListProfilesWarehouseInSpaceAlphaOutput.attributeTypeMap;
    };
    ListProfilesWarehouseInSpaceAlphaOutput.discriminator = undefined;
    ListProfilesWarehouseInSpaceAlphaOutput.attributeTypeMap = [
        {
            name: 'profilesWarehouses',
            baseName: 'profilesWarehouses',
            type: 'Array<ProfilesWarehouseAlpha>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListProfilesWarehouseInSpaceAlphaOutput;
}());
exports.ListProfilesWarehouseInSpaceAlphaOutput = ListProfilesWarehouseInSpaceAlphaOutput;
//# sourceMappingURL=listProfilesWarehouseInSpaceAlphaOutput.js.map