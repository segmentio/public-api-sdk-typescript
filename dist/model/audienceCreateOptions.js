"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceCreateOptions = void 0;
var AudienceCreateOptions = (function () {
    function AudienceCreateOptions() {
    }
    AudienceCreateOptions.getAttributeTypeMap = function () {
        return AudienceCreateOptions.attributeTypeMap;
    };
    AudienceCreateOptions.discriminator = undefined;
    AudienceCreateOptions.attributeTypeMap = [
        {
            name: 'includeHistorical',
            baseName: 'includeHistorical',
            type: 'boolean',
        },
        {
            name: 'includeAnonymous',
            baseName: 'includeAnonymous',
            type: 'boolean',
        },
    ];
    return AudienceCreateOptions;
}());
exports.AudienceCreateOptions = AudienceCreateOptions;
//# sourceMappingURL=audienceCreateOptions.js.map