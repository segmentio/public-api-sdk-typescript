"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOptionV1 = void 0;
var IntegrationOptionV1 = (function () {
    function IntegrationOptionV1() {
    }
    IntegrationOptionV1.getAttributeTypeMap = function () {
        return IntegrationOptionV1.attributeTypeMap;
    };
    IntegrationOptionV1.discriminator = undefined;
    IntegrationOptionV1.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'defaultValue',
            baseName: 'defaultValue',
            type: 'any',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
    ];
    return IntegrationOptionV1;
}());
exports.IntegrationOptionV1 = IntegrationOptionV1;
//# sourceMappingURL=integrationOptionV1.js.map