"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var Profile = (function () {
    function Profile() {
    }
    Profile.getAttributeTypeMap = function () {
        return Profile.attributeTypeMap;
    };
    Profile.discriminator = undefined;
    Profile.attributeTypeMap = [
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
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map