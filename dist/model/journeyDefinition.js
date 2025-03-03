"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyDefinition = void 0;
var JourneyDefinition = (function () {
    function JourneyDefinition() {
    }
    JourneyDefinition.getAttributeTypeMap = function () {
        return JourneyDefinition.attributeTypeMap;
    };
    JourneyDefinition.discriminator = undefined;
    JourneyDefinition.attributeTypeMap = [
        {
            name: 'initialState',
            baseName: 'initialState',
            type: 'string',
        },
        {
            name: 'entryRules',
            baseName: 'entryRules',
            type: 'EntryRules',
        },
        {
            name: 'exitRules',
            baseName: 'exitRules',
            type: 'ExitRulesConfig',
        },
        {
            name: 'states',
            baseName: 'states',
            type: 'Array<JourneyState>',
        },
    ];
    return JourneyDefinition;
}());
exports.JourneyDefinition = JourneyDefinition;
//# sourceMappingURL=journeyDefinition.js.map