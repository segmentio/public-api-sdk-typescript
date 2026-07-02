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
            name: 'initial',
            baseName: 'initial',
            type: 'string',
        },
        {
            name: 'states',
            baseName: 'states',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'entryRules',
            baseName: 'entryRules',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'exitRules',
            baseName: 'exitRules',
            type: '{ [key: string]: any; }',
        },
    ];
    return JourneyDefinition;
}());
exports.JourneyDefinition = JourneyDefinition;
//# sourceMappingURL=journeyDefinition.js.map