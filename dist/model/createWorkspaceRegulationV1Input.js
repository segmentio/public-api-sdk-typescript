"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkspaceRegulationV1Input = void 0;
var CreateWorkspaceRegulationV1Input = (function () {
    function CreateWorkspaceRegulationV1Input() {
    }
    CreateWorkspaceRegulationV1Input.getAttributeTypeMap = function () {
        return CreateWorkspaceRegulationV1Input.attributeTypeMap;
    };
    CreateWorkspaceRegulationV1Input.discriminator = undefined;
    CreateWorkspaceRegulationV1Input.attributeTypeMap = [
        {
            name: 'regulationType',
            baseName: 'regulationType',
            type: 'CreateWorkspaceRegulationV1Input.RegulationTypeEnum',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'CreateWorkspaceRegulationV1Input.SubjectTypeEnum',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
    ];
    return CreateWorkspaceRegulationV1Input;
}());
exports.CreateWorkspaceRegulationV1Input = CreateWorkspaceRegulationV1Input;
(function (CreateWorkspaceRegulationV1Input) {
    var RegulationTypeEnum;
    (function (RegulationTypeEnum) {
        RegulationTypeEnum[RegulationTypeEnum["DELETE_INTERNAL"] = 'DELETE_INTERNAL'] = "DELETE_INTERNAL";
        RegulationTypeEnum[RegulationTypeEnum["DELETE_ONLY"] = 'DELETE_ONLY'] = "DELETE_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_ONLY"] = 'SUPPRESS_ONLY'] = "SUPPRESS_ONLY";
        RegulationTypeEnum[RegulationTypeEnum["SUPPRESS_WITH_DELETE"] = 'SUPPRESS_WITH_DELETE'] = "SUPPRESS_WITH_DELETE";
        RegulationTypeEnum[RegulationTypeEnum["UNSUPPRESS"] = 'UNSUPPRESS'] = "UNSUPPRESS";
    })(RegulationTypeEnum = CreateWorkspaceRegulationV1Input.RegulationTypeEnum || (CreateWorkspaceRegulationV1Input.RegulationTypeEnum = {}));
    var SubjectTypeEnum;
    (function (SubjectTypeEnum) {
        SubjectTypeEnum[SubjectTypeEnum["OBJECT_ID"] = 'OBJECT_ID'] = "OBJECT_ID";
        SubjectTypeEnum[SubjectTypeEnum["USER_ID"] = 'USER_ID'] = "USER_ID";
    })(SubjectTypeEnum = CreateWorkspaceRegulationV1Input.SubjectTypeEnum || (CreateWorkspaceRegulationV1Input.SubjectTypeEnum = {}));
})(CreateWorkspaceRegulationV1Input = exports.CreateWorkspaceRegulationV1Input || (exports.CreateWorkspaceRegulationV1Input = {}));
exports.CreateWorkspaceRegulationV1Input = CreateWorkspaceRegulationV1Input;
//# sourceMappingURL=createWorkspaceRegulationV1Input.js.map