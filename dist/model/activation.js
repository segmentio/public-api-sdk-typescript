"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activation = void 0;
var Activation = (function () {
    function Activation() {
    }
    Activation.getAttributeTypeMap = function () {
        return Activation.attributeTypeMap;
    };
    Activation.discriminator = undefined;
    Activation.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'actionDefinition',
            baseName: 'actionDefinition',
            type: 'ActionDefinition',
        },
        {
            name: 'propertySelections',
            baseName: 'propertySelections',
            type: 'PropertySelectionsConfig',
        },
    ];
    return Activation;
}());
exports.Activation = Activation;
//# sourceMappingURL=activation.js.map