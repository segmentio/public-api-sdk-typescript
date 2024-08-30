"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonalizationDataInput = void 0;
var GetPersonalizationDataInput = (function () {
    function GetPersonalizationDataInput() {
    }
    GetPersonalizationDataInput.getAttributeTypeMap = function () {
        return GetPersonalizationDataInput.attributeTypeMap;
    };
    GetPersonalizationDataInput.discriminator = undefined;
    GetPersonalizationDataInput.attributeTypeMap = [
        {
            name: 'spaceId',
            baseName: 'spaceId',
            type: 'string',
        },
        {
            name: 'entityType',
            baseName: 'entityType',
            type: 'string',
        },
        {
            name: 'entityId',
            baseName: 'entityId',
            type: 'string',
        },
        {
            name: 'childEntityType',
            baseName: 'childEntityType',
            type: 'string',
        },
    ];
    return GetPersonalizationDataInput;
}());
exports.GetPersonalizationDataInput = GetPersonalizationDataInput;
//# sourceMappingURL=getPersonalizationDataInput.js.map