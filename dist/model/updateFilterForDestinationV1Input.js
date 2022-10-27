"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilterForDestinationV1Input = void 0;
var UpdateFilterForDestinationV1Input = (function () {
    function UpdateFilterForDestinationV1Input() {
    }
    UpdateFilterForDestinationV1Input.getAttributeTypeMap = function () {
        return UpdateFilterForDestinationV1Input.attributeTypeMap;
    };
    UpdateFilterForDestinationV1Input.discriminator = undefined;
    UpdateFilterForDestinationV1Input.attributeTypeMap = [
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
    return UpdateFilterForDestinationV1Input;
}());
exports.UpdateFilterForDestinationV1Input = UpdateFilterForDestinationV1Input;
//# sourceMappingURL=updateFilterForDestinationV1Input.js.map