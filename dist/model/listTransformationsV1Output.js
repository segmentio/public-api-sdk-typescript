"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransformationsV1Output = void 0;
var ListTransformationsV1Output = (function () {
    function ListTransformationsV1Output() {
    }
    ListTransformationsV1Output.getAttributeTypeMap = function () {
        return ListTransformationsV1Output.attributeTypeMap;
    };
    ListTransformationsV1Output.discriminator = undefined;
    ListTransformationsV1Output.attributeTypeMap = [
        {
            name: 'transformations',
            baseName: 'transformations',
            type: 'Array<TransformationV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListTransformationsV1Output;
}());
exports.ListTransformationsV1Output = ListTransformationsV1Output;
//# sourceMappingURL=listTransformationsV1Output.js.map