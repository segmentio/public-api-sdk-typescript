"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDSyncConfigurationInput = void 0;
var IDSyncConfigurationInput = (function () {
    function IDSyncConfigurationInput() {
    }
    IDSyncConfigurationInput.getAttributeTypeMap = function () {
        return IDSyncConfigurationInput.attributeTypeMap;
    };
    IDSyncConfigurationInput.discriminator = undefined;
    IDSyncConfigurationInput.attributeTypeMap = [
        {
            name: 'externalId',
            baseName: 'externalId',
            type: 'string',
        },
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'string',
        },
    ];
    return IDSyncConfigurationInput;
}());
exports.IDSyncConfigurationInput = IDSyncConfigurationInput;
//# sourceMappingURL=iDSyncConfigurationInput.js.map