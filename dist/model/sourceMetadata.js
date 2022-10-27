"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMetadata = void 0;
var SourceMetadata = (function () {
    function SourceMetadata() {
    }
    SourceMetadata.getAttributeTypeMap = function () {
        return SourceMetadata.attributeTypeMap;
    };
    SourceMetadata.discriminator = undefined;
    SourceMetadata.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logos',
            baseName: 'logos',
            type: 'Logos1',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'isCloudEventSource',
            baseName: 'isCloudEventSource',
            type: 'boolean',
        },
    ];
    return SourceMetadata;
}());
exports.SourceMetadata = SourceMetadata;
//# sourceMappingURL=sourceMetadata.js.map