"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlModel = void 0;
var ReverseEtlModel = (function () {
    function ReverseEtlModel() {
    }
    ReverseEtlModel.getAttributeTypeMap = function () {
        return ReverseEtlModel.attributeTypeMap;
    };
    ReverseEtlModel.discriminator = undefined;
    ReverseEtlModel.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
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
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'scheduleStrategy',
            baseName: 'scheduleStrategy',
            type: 'string',
        },
        {
            name: 'scheduleConfig',
            baseName: 'scheduleConfig',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'queryIdentifierColumn',
            baseName: 'queryIdentifierColumn',
            type: 'string',
        },
    ];
    return ReverseEtlModel;
}());
exports.ReverseEtlModel = ReverseEtlModel;
//# sourceMappingURL=reverseEtlModel.js.map