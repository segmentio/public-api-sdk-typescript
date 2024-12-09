"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceRegulationV1Input = void 0;
var CreateSourceRegulationV1Input = (function () {
    function CreateSourceRegulationV1Input() {
    }
    CreateSourceRegulationV1Input.getAttributeTypeMap = function () {
        return CreateSourceRegulationV1Input.attributeTypeMap;
    };
    CreateSourceRegulationV1Input.discriminator = undefined;
    CreateSourceRegulationV1Input.attributeTypeMap = [
        {
            name: 'regulationType',
            baseName: 'regulationType',
            type: 'CreateSourceRegulationV1Input.RegulationTypeEnum',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'CreateSourceRegulationV1Input.SubjectTypeEnum',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
    ];
    return CreateSourceRegulationV1Input;
}());
exports.CreateSourceRegulationV1Input = CreateSourceRegulationV1Input;
(function (CreateSourceRegulationV1Input) {
    var RegulationTypeEnum;
    (function (RegulationTypeEnum) {
        RegulationTypeEnum[RegulationTypeEnum["DELETE_ARCHIVE_ONLY"] = 'DELETE_ARCHIVE_ONLY'] = "DELETE_ARCHIVE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_INTERNAL"] = 'DELETE_INTERNAL'] = "DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_ONLY"] = 'DELETE_ONLY'] = "DELETE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_ONLY"] = 'SUPPRESS_ONLY'] = "SUPPRESS_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE"] = 'SUPPRESS_WITH_DELETE'] = "SUPPRESS_WITH_DELETE";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE_INTERNAL"] = 'SUPPRESS_WITH_DELETE_INTERNAL'] = "SUPPRESS_WITH_DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["UNSUPPRESS"] = 'UNSUPPRESS'] = "UNSUPPRESS";
    })(RegulationTypeEnum = CreateSourceRegulationV1Input.RegulationTypeEnum || (CreateSourceRegulationV1Input.RegulationTypeEnum = {}));
    var SubjectTypeEnum;
    (function (SubjectTypeEnum) {
        SubjectTypeEnum[SubjectTypeEnum["ANONYMOUS_ID"] = 'ANONYMOUS_ID'] = "ANONYMOUS_ID";
        SubjectTypeEnum[SubjectTypeEnum["USER_ID"] = 'USER_ID'] = "USER_ID";
    })(SubjectTypeEnum = CreateSourceRegulationV1Input.SubjectTypeEnum || (CreateSourceRegulationV1Input.SubjectTypeEnum = {}));
})(CreateSourceRegulationV1Input = exports.CreateSourceRegulationV1Input || (exports.CreateSourceRegulationV1Input = {}));
exports.CreateSourceRegulationV1Input = CreateSourceRegulationV1Input;
//# sourceMappingURL=createSourceRegulationV1Input.js.map