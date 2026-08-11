"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile1 = void 0;
var Profile1 = (function () {
    function Profile1() {
    }
    Profile1.getAttributeTypeMap = function () {
        return Profile1.attributeTypeMap;
    };
    Profile1.discriminator = undefined;
    Profile1.attributeTypeMap = [
        {
            name: 'properties',
            baseName: 'properties',
            type: 'Array<string>',
        },
        {
            name: 'mapping',
            baseName: 'mapping',
            type: '{ [key: string]: string; }',
        },
    ];
    return Profile1;
}());
exports.Profile1 = Profile1;
//# sourceMappingURL=profile1.js.map