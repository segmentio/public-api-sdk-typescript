"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashPropertiesConfiguration = void 0;
var HashPropertiesConfiguration = (function () {
    function HashPropertiesConfiguration() {
    }
    HashPropertiesConfiguration.getAttributeTypeMap = function () {
        return HashPropertiesConfiguration.attributeTypeMap;
    };
    HashPropertiesConfiguration.discriminator = undefined;
    HashPropertiesConfiguration.attributeTypeMap = [
        {
            name: 'algorithm',
            baseName: 'algorithm',
            type: 'string',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'encoding',
            baseName: 'encoding',
            type: 'HashPropertiesConfiguration.EncodingEnum',
        },
        {
            name: 'paths',
            baseName: 'paths',
            type: 'Array<string>',
        },
    ];
    return HashPropertiesConfiguration;
}());
exports.HashPropertiesConfiguration = HashPropertiesConfiguration;
(function (HashPropertiesConfiguration) {
    var EncodingEnum;
    (function (EncodingEnum) {
        EncodingEnum[EncodingEnum["BASE16"] = 'BASE16'] = "BASE16";
        EncodingEnum[EncodingEnum["BASE64"] = 'BASE64'] = "BASE64";
        EncodingEnum[EncodingEnum["BASE64URL"] = 'BASE64URL'] = "BASE64URL";
        EncodingEnum[EncodingEnum["HEX"] = 'HEX'] = "HEX";
    })(EncodingEnum = HashPropertiesConfiguration.EncodingEnum || (HashPropertiesConfiguration.EncodingEnum = {}));
})(HashPropertiesConfiguration = exports.HashPropertiesConfiguration || (exports.HashPropertiesConfiguration = {}));
exports.HashPropertiesConfiguration = HashPropertiesConfiguration;
//# sourceMappingURL=hashPropertiesConfiguration.js.map