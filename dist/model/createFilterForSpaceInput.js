"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilterForSpaceInput = void 0;
var CreateFilterForSpaceInput = (function () {
    function CreateFilterForSpaceInput() {
    }
    CreateFilterForSpaceInput.getAttributeTypeMap = function () {
        return CreateFilterForSpaceInput.attributeTypeMap;
    };
    CreateFilterForSpaceInput.discriminator = undefined;
    CreateFilterForSpaceInput.attributeTypeMap = [
        {
            name: 'integrationId',
            baseName: 'integrationId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'drop',
            baseName: 'drop',
            type: 'boolean',
        },
    ];
    return CreateFilterForSpaceInput;
}());
exports.CreateFilterForSpaceInput = CreateFilterForSpaceInput;
//# sourceMappingURL=createFilterForSpaceInput.js.map