"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilterForDestinationV1Input = void 0;
var CreateFilterForDestinationV1Input = (function () {
    function CreateFilterForDestinationV1Input() {
    }
    CreateFilterForDestinationV1Input.getAttributeTypeMap = function () {
        return CreateFilterForDestinationV1Input.attributeTypeMap;
    };
    CreateFilterForDestinationV1Input.discriminator = undefined;
    CreateFilterForDestinationV1Input.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationFilterActionV1>',
        },
        {
            name: 'title',
            baseName: 'title',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];
    return CreateFilterForDestinationV1Input;
}());
exports.CreateFilterForDestinationV1Input = CreateFilterForDestinationV1Input;
//# sourceMappingURL=createFilterForDestinationV1Input.js.map