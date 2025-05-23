"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = void 0;
var Download = (function () {
    function Download() {
    }
    Download.getAttributeTypeMap = function () {
        return Download.attributeTypeMap;
    };
    Download.discriminator = undefined;
    Download.attributeTypeMap = [
        {
            name: 'urls',
            baseName: 'urls',
            type: 'Array<string>',
        },
    ];
    return Download;
}());
exports.Download = Download;
//# sourceMappingURL=download.js.map