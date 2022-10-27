"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOptionBeta = void 0;
var IntegrationOptionBeta = (function () {
    function IntegrationOptionBeta() {
    }
    IntegrationOptionBeta.getAttributeTypeMap = function () {
        return IntegrationOptionBeta.attributeTypeMap;
    };
    IntegrationOptionBeta.discriminator = undefined;
    IntegrationOptionBeta.attributeTypeMap = [
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
    return IntegrationOptionBeta;
}());
exports.IntegrationOptionBeta = IntegrationOptionBeta;
//# sourceMappingURL=integrationOptionBeta.js.map