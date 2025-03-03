"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyInfo = void 0;
var JourneyInfo = (function () {
    function JourneyInfo() {
    }
    JourneyInfo.getAttributeTypeMap = function () {
        return JourneyInfo.attributeTypeMap;
    };
    JourneyInfo.discriminator = undefined;
    JourneyInfo.attributeTypeMap = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
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
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'updatedBy',
            baseName: 'updatedBy',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'JourneyVersionOutput',
        },
    ];
    return JourneyInfo;
}());
exports.JourneyInfo = JourneyInfo;
//# sourceMappingURL=journeyInfo.js.map