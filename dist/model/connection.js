"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var Connection = (function () {
    function Connection() {
    }
    Connection.getAttributeTypeMap = function () {
        return Connection.attributeTypeMap;
    };
    Connection.discriminator = undefined;
    Connection.attributeTypeMap = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
    ];
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map