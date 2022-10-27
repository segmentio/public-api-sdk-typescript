"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRegulationsFromSourceV1Output = void 0;
var ListRegulationsFromSourceV1Output = (function () {
    function ListRegulationsFromSourceV1Output() {
    }
    ListRegulationsFromSourceV1Output.getAttributeTypeMap = function () {
        return ListRegulationsFromSourceV1Output.attributeTypeMap;
    };
    ListRegulationsFromSourceV1Output.discriminator = undefined;
    ListRegulationsFromSourceV1Output.attributeTypeMap = [
        {
            name: 'regulations',
            baseName: 'regulations',
            type: 'Array<RegulationListEntryV1>',
        },
    ];
    return ListRegulationsFromSourceV1Output;
}());
exports.ListRegulationsFromSourceV1Output = ListRegulationsFromSourceV1Output;
//# sourceMappingURL=listRegulationsFromSourceV1Output.js.map