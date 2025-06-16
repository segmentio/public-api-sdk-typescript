"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDownloadAlphaInput = void 0;
var CreateDownloadAlphaInput = (function () {
    function CreateDownloadAlphaInput() {
    }
    CreateDownloadAlphaInput.getAttributeTypeMap = function () {
        return CreateDownloadAlphaInput.attributeTypeMap;
    };
    CreateDownloadAlphaInput.discriminator = undefined;
    CreateDownloadAlphaInput.attributeTypeMap = [
        {
            name: 'collectionId',
            baseName: 'collectionId',
            type: 'string',
        },
        {
            name: 'hour',
            baseName: 'hour',
            type: 'string',
        },
    ];
    return CreateDownloadAlphaInput;
}());
exports.CreateDownloadAlphaInput = CreateDownloadAlphaInput;
//# sourceMappingURL=createDownloadAlphaInput.js.map