"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationMetadataActionFieldV1 = void 0;
var DestinationMetadataActionFieldV1 = (function () {
    function DestinationMetadataActionFieldV1() {
    }
    DestinationMetadataActionFieldV1.getAttributeTypeMap = function () {
        return DestinationMetadataActionFieldV1.attributeTypeMap;
    };
    DestinationMetadataActionFieldV1.discriminator = undefined;
    DestinationMetadataActionFieldV1.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'sortOrder',
            baseName: 'sortOrder',
            type: 'number',
        },
        {
            name: 'fieldKey',
            baseName: 'fieldKey',
            type: 'string',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationMetadataActionFieldV1.TypeEnum',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'placeholder',
            baseName: 'placeholder',
            type: 'string',
        },
        {
            name: 'defaultValue',
            baseName: 'defaultValue',
            type: 'any',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'multiple',
            baseName: 'multiple',
            type: 'boolean',
        },
        {
            name: 'choices',
            baseName: 'choices',
            type: 'any',
        },
        {
            name: 'dynamic',
            baseName: 'dynamic',
            type: 'boolean',
        },
        {
            name: 'allowNull',
            baseName: 'allowNull',
            type: 'boolean',
        },
    ];
    return DestinationMetadataActionFieldV1;
}());
exports.DestinationMetadataActionFieldV1 = DestinationMetadataActionFieldV1;
(function (DestinationMetadataActionFieldV1) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["BOOLEAN"] = 'BOOLEAN'] = "BOOLEAN";
        TypeEnum[TypeEnum["DATETIME"] = 'DATETIME'] = "DATETIME";
        TypeEnum[TypeEnum["HIDDEN"] = 'HIDDEN'] = "HIDDEN";
        TypeEnum[TypeEnum["INTEGER"] = 'INTEGER'] = "INTEGER";
        TypeEnum[TypeEnum["NUMBER"] = 'NUMBER'] = "NUMBER";
        TypeEnum[TypeEnum["OBJECT"] = 'OBJECT'] = "OBJECT";
        TypeEnum[TypeEnum["PASSWORD"] = 'PASSWORD'] = "PASSWORD";
        TypeEnum[TypeEnum["STRING"] = 'STRING'] = "STRING";
        TypeEnum[TypeEnum["TEXT"] = 'TEXT'] = "TEXT";
    })(TypeEnum = DestinationMetadataActionFieldV1.TypeEnum || (DestinationMetadataActionFieldV1.TypeEnum = {}));
})(DestinationMetadataActionFieldV1 = exports.DestinationMetadataActionFieldV1 || (exports.DestinationMetadataActionFieldV1 = {}));
exports.DestinationMetadataActionFieldV1 = DestinationMetadataActionFieldV1;
//# sourceMappingURL=destinationMetadataActionFieldV1.js.map