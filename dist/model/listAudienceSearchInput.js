"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudienceSearchInput = void 0;
var ListAudienceSearchInput = (function () {
    function ListAudienceSearchInput() {
    }
    ListAudienceSearchInput.getAttributeTypeMap = function () {
        return ListAudienceSearchInput.attributeTypeMap;
    };
    ListAudienceSearchInput.discriminator = undefined;
    ListAudienceSearchInput.attributeTypeMap = [
        {
            name: 'type',
            baseName: 'type',
            type: 'ListAudienceSearchInput.TypeEnum',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];
    return ListAudienceSearchInput;
}());
exports.ListAudienceSearchInput = ListAudienceSearchInput;
(function (ListAudienceSearchInput) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DEFINITION"] = 'DEFINITION'] = "DEFINITION";
        TypeEnum[TypeEnum["KEY"] = 'KEY'] = "KEY";
        TypeEnum[TypeEnum["NAME"] = 'NAME'] = "NAME";
    })(TypeEnum = ListAudienceSearchInput.TypeEnum || (ListAudienceSearchInput.TypeEnum = {}));
})(ListAudienceSearchInput = exports.ListAudienceSearchInput || (exports.ListAudienceSearchInput = {}));
exports.ListAudienceSearchInput = ListAudienceSearchInput;
//# sourceMappingURL=listAudienceSearchInput.js.map