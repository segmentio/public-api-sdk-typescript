"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputedTrait = void 0;
var ComputedTrait = (function () {
    function ComputedTrait() {
    }
    ComputedTrait.getAttributeTypeMap = function () {
        return ComputedTrait.attributeTypeMap;
    };
    ComputedTrait.discriminator = undefined;
    ComputedTrait.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'spaceId',
            baseName: 'spaceId',
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
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
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
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
    ];
    return ComputedTrait;
}());
exports.ComputedTrait = ComputedTrait;
//# sourceMappingURL=computedTrait.js.map