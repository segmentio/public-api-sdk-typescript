"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFunctionsV1Output = void 0;
var ListFunctionsV1Output = (function () {
    function ListFunctionsV1Output() {
    }
    ListFunctionsV1Output.getAttributeTypeMap = function () {
        return ListFunctionsV1Output.attributeTypeMap;
    };
    ListFunctionsV1Output.discriminator = undefined;
    ListFunctionsV1Output.attributeTypeMap = [
        {
            name: 'functions',
            baseName: 'functions',
            type: 'Array<ListFunctionItemV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];
    return ListFunctionsV1Output;
}());
exports.ListFunctionsV1Output = ListFunctionsV1Output;
//# sourceMappingURL=listFunctionsV1Output.js.map