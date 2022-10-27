"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLabelsToSourceV1Input = void 0;
var AddLabelsToSourceV1Input = (function () {
    function AddLabelsToSourceV1Input() {
    }
    AddLabelsToSourceV1Input.getAttributeTypeMap = function () {
        return AddLabelsToSourceV1Input.attributeTypeMap;
    };
    AddLabelsToSourceV1Input.discriminator = undefined;
    AddLabelsToSourceV1Input.attributeTypeMap = [
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<LabelV1>',
        },
    ];
    return AddLabelsToSourceV1Input;
}());
exports.AddLabelsToSourceV1Input = AddLabelsToSourceV1Input;
//# sourceMappingURL=addLabelsToSourceV1Input.js.map