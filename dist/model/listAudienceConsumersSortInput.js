"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAudienceConsumersSortInput = void 0;
var ListAudienceConsumersSortInput = (function () {
    function ListAudienceConsumersSortInput() {
    }
    ListAudienceConsumersSortInput.getAttributeTypeMap = function () {
        return ListAudienceConsumersSortInput.attributeTypeMap;
    };
    ListAudienceConsumersSortInput.discriminator = undefined;
    ListAudienceConsumersSortInput.attributeTypeMap = [
        {
            name: 'field',
            baseName: 'field',
            type: 'ListAudienceConsumersSortInput.FieldEnum',
        },
        {
            name: 'direction',
            baseName: 'direction',
            type: 'ListAudienceConsumersSortInput.DirectionEnum',
        },
    ];
    return ListAudienceConsumersSortInput;
}());
exports.ListAudienceConsumersSortInput = ListAudienceConsumersSortInput;
(function (ListAudienceConsumersSortInput) {
    var FieldEnum;
    (function (FieldEnum) {
        FieldEnum[FieldEnum["CREATED_AT"] = 'CREATED_AT'] = "CREATED_AT";
        FieldEnum[FieldEnum["NAME"] = 'NAME'] = "NAME";
        FieldEnum[FieldEnum["UPDATED_AT"] = 'UPDATED_AT'] = "UPDATED_AT";
    })(FieldEnum = ListAudienceConsumersSortInput.FieldEnum || (ListAudienceConsumersSortInput.FieldEnum = {}));
    var DirectionEnum;
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["ASC"] = 'ASC'] = "ASC";
        DirectionEnum[DirectionEnum["DESC"] = 'DESC'] = "DESC";
    })(DirectionEnum = ListAudienceConsumersSortInput.DirectionEnum || (ListAudienceConsumersSortInput.DirectionEnum = {}));
})(ListAudienceConsumersSortInput = exports.ListAudienceConsumersSortInput || (exports.ListAudienceConsumersSortInput = {}));
exports.ListAudienceConsumersSortInput = ListAudienceConsumersSortInput;
//# sourceMappingURL=listAudienceConsumersSortInput.js.map