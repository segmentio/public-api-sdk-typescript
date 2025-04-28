"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudiencesPaginationInput = void 0;
var ListAudiencesPaginationInput = (function () {
    function ListAudiencesPaginationInput() {
    }
    ListAudiencesPaginationInput.getAttributeTypeMap = function () {
        return ListAudiencesPaginationInput.attributeTypeMap;
    };
    ListAudiencesPaginationInput.discriminator = undefined;
    ListAudiencesPaginationInput.attributeTypeMap = [
        {
            name: 'cursor',
            baseName: 'cursor',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];
    return ListAudiencesPaginationInput;
}());
exports.ListAudiencesPaginationInput = ListAudiencesPaginationInput;
//# sourceMappingURL=listAudiencesPaginationInput.js.map