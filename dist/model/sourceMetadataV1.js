"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMetadataV1 = void 0;
var SourceMetadataV1 = (function () {
    function SourceMetadataV1() {
    }
    SourceMetadataV1.getAttributeTypeMap = function () {
        return SourceMetadataV1.attributeTypeMap;
    };
    SourceMetadataV1.discriminator = undefined;
    SourceMetadataV1.attributeTypeMap = [
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
    return SourceMetadataV1;
}());
exports.SourceMetadataV1 = SourceMetadataV1;
//# sourceMappingURL=sourceMetadataV1.js.map