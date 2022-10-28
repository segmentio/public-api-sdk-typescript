"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var Contact = (function () {
    function Contact() {
    }
    Contact.getAttributeTypeMap = function () {
        return Contact.attributeTypeMap;
    };
    Contact.discriminator = undefined;
    Contact.attributeTypeMap = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'email',
            baseName: 'email',
            type: 'string',
        },
        {
            name: 'role',
            baseName: 'role',
            type: 'string',
        },
        {
            name: 'isPrimary',
            baseName: 'isPrimary',
            type: 'boolean',
        },
    ];
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map