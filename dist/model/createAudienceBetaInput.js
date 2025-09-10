"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudienceBetaInput = void 0;
var CreateAudienceBetaInput = (function () {
    function CreateAudienceBetaInput() {
    }
    CreateAudienceBetaInput.getAttributeTypeMap = function () {
        return CreateAudienceBetaInput.attributeTypeMap;
    };
    CreateAudienceBetaInput.discriminator = undefined;
    CreateAudienceBetaInput.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'computeConditionsWrapper',
            baseName: 'computeConditionsWrapper',
            type: 'ComputeConditionsWrapper',
        },
        {
            name: 'productVariant',
            baseName: 'productVariant',
            type: 'CreateAudienceBetaInput.ProductVariantEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
        {
            name: 'targetEntity',
            baseName: 'targetEntity',
            type: 'string',
        },
    ];
    return CreateAudienceBetaInput;
}());
exports.CreateAudienceBetaInput = CreateAudienceBetaInput;
(function (CreateAudienceBetaInput) {
    var ProductVariantEnum;
    (function (ProductVariantEnum) {
        ProductVariantEnum[ProductVariantEnum["ACCOUNTS"] = 'ACCOUNTS'] = "ACCOUNTS";
        ProductVariantEnum[ProductVariantEnum["LINKED"] = 'LINKED'] = "LINKED";
        ProductVariantEnum[ProductVariantEnum["USERS"] = 'USERS'] = "USERS";
    })(ProductVariantEnum = CreateAudienceBetaInput.ProductVariantEnum || (CreateAudienceBetaInput.ProductVariantEnum = {}));
})(CreateAudienceBetaInput = exports.CreateAudienceBetaInput || (exports.CreateAudienceBetaInput = {}));
exports.CreateAudienceBetaInput = CreateAudienceBetaInput;
//# sourceMappingURL=createAudienceBetaInput.js.map