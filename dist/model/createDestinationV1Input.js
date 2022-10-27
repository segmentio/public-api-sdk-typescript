"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDestinationV1Input = void 0;
var CreateDestinationV1Input = (function () {
    function CreateDestinationV1Input() {
    }
    CreateDestinationV1Input.getAttributeTypeMap = function () {
        return CreateDestinationV1Input.attributeTypeMap;
    };
    CreateDestinationV1Input.discriminator = undefined;
    CreateDestinationV1Input.attributeTypeMap = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'metadataId',
            baseName: 'metadataId',
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return CreateDestinationV1Input;
}());
exports.CreateDestinationV1Input = CreateDestinationV1Input;
//# sourceMappingURL=createDestinationV1Input.js.map