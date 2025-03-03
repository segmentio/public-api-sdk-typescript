"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationsInput = void 0;
var UpdateDestinationsInput = (function () {
    function UpdateDestinationsInput() {
    }
    UpdateDestinationsInput.getAttributeTypeMap = function () {
        return UpdateDestinationsInput.attributeTypeMap;
    };
    UpdateDestinationsInput.discriminator = undefined;
    UpdateDestinationsInput.attributeTypeMap = [
        {
            name: 'stateId',
            baseName: 'stateId',
            type: 'string',
        },
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<Destination>',
        },
    ];
    return UpdateDestinationsInput;
}());
exports.UpdateDestinationsInput = UpdateDestinationsInput;
//# sourceMappingURL=updateDestinationsInput.js.map