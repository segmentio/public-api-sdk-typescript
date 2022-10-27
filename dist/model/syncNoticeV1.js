"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncNoticeV1 = void 0;
var SyncNoticeV1 = (function () {
    function SyncNoticeV1() {
    }
    SyncNoticeV1.getAttributeTypeMap = function () {
        return SyncNoticeV1.attributeTypeMap;
    };
    SyncNoticeV1.discriminator = undefined;
    SyncNoticeV1.attributeTypeMap = [
        {
            name: 'level',
            baseName: 'level',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
    ];
    return SyncNoticeV1;
}());
exports.SyncNoticeV1 = SyncNoticeV1;
//# sourceMappingURL=syncNoticeV1.js.map