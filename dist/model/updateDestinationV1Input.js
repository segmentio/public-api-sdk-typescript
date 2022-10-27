"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationV1Input = void 0;
var UpdateDestinationV1Input = (function () {
    function UpdateDestinationV1Input() {
    }
    UpdateDestinationV1Input.getAttributeTypeMap = function () {
        return UpdateDestinationV1Input.attributeTypeMap;
    };
    UpdateDestinationV1Input.discriminator = undefined;
    UpdateDestinationV1Input.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];
    return UpdateDestinationV1Input;
}());
exports.UpdateDestinationV1Input = UpdateDestinationV1Input;
//# sourceMappingURL=updateDestinationV1Input.js.map