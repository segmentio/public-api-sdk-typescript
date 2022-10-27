"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCloudSourceRegulationV1Input = void 0;
var CreateCloudSourceRegulationV1Input = (function () {
    function CreateCloudSourceRegulationV1Input() {
    }
    CreateCloudSourceRegulationV1Input.getAttributeTypeMap = function () {
        return CreateCloudSourceRegulationV1Input.attributeTypeMap;
    };
    CreateCloudSourceRegulationV1Input.discriminator = undefined;
    CreateCloudSourceRegulationV1Input.attributeTypeMap = [
        {
            name: 'regulationType',
            baseName: 'regulationType',
            type: 'CreateCloudSourceRegulationV1Input.RegulationTypeEnum',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'CreateCloudSourceRegulationV1Input.SubjectTypeEnum',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
        {
            name: 'collection',
            baseName: 'collection',
            type: 'string',
        },
    ];
    return CreateCloudSourceRegulationV1Input;
}());
exports.CreateCloudSourceRegulationV1Input = CreateCloudSourceRegulationV1Input;
(function (CreateCloudSourceRegulationV1Input) {
    var RegulationTypeEnum;
    (function (RegulationTypeEnum) {
        RegulationTypeEnum[RegulationTypeEnum["BULK_DELETE_ONLY"] = 'BULK_DELETE_ONLY'] = "BULK_DELETE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_INTERNAL"] = 'DELETE_INTERNAL'] = "DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_ONLY"] = 'DELETE_ONLY'] = "DELETE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_ONLY"] = 'SUPPRESS_ONLY'] = "SUPPRESS_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE"] = 'SUPPRESS_WITH_DELETE'] = "SUPPRESS_WITH_DELETE";
        RegulationTypeEnum[RegulationTypeEnum["UNSUPPRESS"] = 'UNSUPPRESS'] = "UNSUPPRESS";
    })(RegulationTypeEnum = CreateCloudSourceRegulationV1Input.RegulationTypeEnum || (CreateCloudSourceRegulationV1Input.RegulationTypeEnum = {}));
    var SubjectTypeEnum;
    (function (SubjectTypeEnum) {
        SubjectTypeEnum[SubjectTypeEnum["OBJECT_ID"] = 'OBJECT_ID'] = "OBJECT_ID";
    })(SubjectTypeEnum = CreateCloudSourceRegulationV1Input.SubjectTypeEnum || (CreateCloudSourceRegulationV1Input.SubjectTypeEnum = {}));
})(CreateCloudSourceRegulationV1Input = exports.CreateCloudSourceRegulationV1Input || (exports.CreateCloudSourceRegulationV1Input = {}));
exports.CreateCloudSourceRegulationV1Input = CreateCloudSourceRegulationV1Input;
//# sourceMappingURL=createCloudSourceRegulationV1Input.js.map