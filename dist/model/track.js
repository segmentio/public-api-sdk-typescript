"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
var Track = (function () {
    function Track() {
    }
    Track.getAttributeTypeMap = function () {
        return Track.attributeTypeMap;
    };
    Track.discriminator = undefined;
    Track.attributeTypeMap = [
        {
            name: 'allowUnplannedEvents',
            baseName: 'allowUnplannedEvents',
            type: 'boolean',
        },
        {
            name: 'allowUnplannedEventProperties',
            baseName: 'allowUnplannedEventProperties',
            type: 'boolean',
        },
        {
            name: 'allowEventOnViolations',
            baseName: 'allowEventOnViolations',
            type: 'boolean',
        },
        {
            name: 'allowPropertiesOnViolations',
            baseName: 'allowPropertiesOnViolations',
            type: 'boolean',
        },
        {
            name: 'commonEventOnViolations',
            baseName: 'commonEventOnViolations',
            type: 'Track.CommonEventOnViolationsEnum',
        },
    ];
    return Track;
}());
exports.Track = Track;
(function (Track) {
    var CommonEventOnViolationsEnum;
    (function (CommonEventOnViolationsEnum) {
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["ALLOW"] = 'ALLOW'] = "ALLOW";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["BLOCK"] = 'BLOCK'] = "BLOCK";
        CommonEventOnViolationsEnum[CommonEventOnViolationsEnum["OMIT_PROPERTIES"] = 'OMIT_PROPERTIES'] = "OMIT_PROPERTIES";
    })(CommonEventOnViolationsEnum = Track.CommonEventOnViolationsEnum || (Track.CommonEventOnViolationsEnum = {}));
})(Track = exports.Track || (exports.Track = {}));
exports.Track = Track;
//# sourceMappingURL=track.js.map