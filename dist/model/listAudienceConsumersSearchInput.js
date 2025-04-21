"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudienceConsumersSearchInput = void 0;
var ListAudienceConsumersSearchInput = (function () {
    function ListAudienceConsumersSearchInput() {
    }
    ListAudienceConsumersSearchInput.getAttributeTypeMap = function () {
        return ListAudienceConsumersSearchInput.attributeTypeMap;
    };
    ListAudienceConsumersSearchInput.discriminator = undefined;
    ListAudienceConsumersSearchInput.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ListAudienceConsumersSearchInput.TypeEnum',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return ListAudienceConsumersSearchInput;
}());
exports.ListAudienceConsumersSearchInput = ListAudienceConsumersSearchInput;
(function (ListAudienceConsumersSearchInput) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DEFINITION"] = 'DEFINITION'] = "DEFINITION";
        TypeEnum[TypeEnum["NAME"] = 'NAME'] = "NAME";
    })(TypeEnum = ListAudienceConsumersSearchInput.TypeEnum || (ListAudienceConsumersSearchInput.TypeEnum = {}));
})(ListAudienceConsumersSearchInput = exports.ListAudienceConsumersSearchInput || (exports.ListAudienceConsumersSearchInput = {}));
exports.ListAudienceConsumersSearchInput = ListAudienceConsumersSearchInput;
//# sourceMappingURL=listAudienceConsumersSearchInput.js.map