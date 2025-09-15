"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListActivationsFromAudienceOutput = void 0;
var ListActivationsFromAudienceOutput = (function () {
    function ListActivationsFromAudienceOutput() {
    }
    ListActivationsFromAudienceOutput.getAttributeTypeMap = function () {
        return ListActivationsFromAudienceOutput.attributeTypeMap;
    };
    ListActivationsFromAudienceOutput.discriminator = undefined;
    ListActivationsFromAudienceOutput.attributeTypeMap = [
        {
            name: 'activations',
            baseName: 'activations',
            type: 'Array<ActivationOutput>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListActivationsFromAudienceOutput;
}());
exports.ListActivationsFromAudienceOutput = ListActivationsFromAudienceOutput;
//# sourceMappingURL=listActivationsFromAudienceOutput.js.map