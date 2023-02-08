"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEtlModel1 = void 0;
var ReverseEtlModel1 = (function () {
    function ReverseEtlModel1() {
    }
    ReverseEtlModel1.getAttributeTypeMap = function () {
        return ReverseEtlModel1.attributeTypeMap;
    };
    ReverseEtlModel1.discriminator = undefined;
    ReverseEtlModel1.attributeTypeMap = [
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
            type: 'any',
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
    return ReverseEtlModel1;
}());
exports.ReverseEtlModel1 = ReverseEtlModel1;
//# sourceMappingURL=reverseEtlModel1.js.map