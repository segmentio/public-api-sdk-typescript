"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDefinition = void 0;
var ActionDefinition = (function () {
    function ActionDefinition() {
    }
    ActionDefinition.getAttributeTypeMap = function () {
        return ActionDefinition.attributeTypeMap;
    };
    ActionDefinition.discriminator = undefined;
    ActionDefinition.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'useDefaultMappings',
            baseName: 'useDefaultMappings',
            type: 'boolean',
        },
        {
            name: 'mappings',
            baseName: 'mappings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'actionId',
            baseName: 'actionId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
    ];
    return ActionDefinition;
}());
exports.ActionDefinition = ActionDefinition;
//# sourceMappingURL=actionDefinition.js.map