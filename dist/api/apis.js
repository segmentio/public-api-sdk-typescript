"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrap = exports.configureEuApis = exports.configureApis = exports.APIS = exports.HttpError = void 0;
__exportStar(require("./aPICallsApi"), exports);
var aPICallsApi_1 = require("./aPICallsApi");
__exportStar(require("./activationsApi"), exports);
var activationsApi_1 = require("./activationsApi");
__exportStar(require("./audiencesApi"), exports);
var audiencesApi_1 = require("./audiencesApi");
__exportStar(require("./auditTrailApi"), exports);
var auditTrailApi_1 = require("./auditTrailApi");
__exportStar(require("./catalogApi"), exports);
var catalogApi_1 = require("./catalogApi");
__exportStar(require("./computedTraitsApi"), exports);
var computedTraitsApi_1 = require("./computedTraitsApi");
__exportStar(require("./customerInsightsApi"), exports);
var customerInsightsApi_1 = require("./customerInsightsApi");
__exportStar(require("./dbtApi"), exports);
var dbtApi_1 = require("./dbtApi");
__exportStar(require("./deletionAndSuppressionApi"), exports);
var deletionAndSuppressionApi_1 = require("./deletionAndSuppressionApi");
__exportStar(require("./deliveryOverviewApi"), exports);
var deliveryOverviewApi_1 = require("./deliveryOverviewApi");
__exportStar(require("./destinationFiltersApi"), exports);
var destinationFiltersApi_1 = require("./destinationFiltersApi");
__exportStar(require("./destinationsApi"), exports);
var destinationsApi_1 = require("./destinationsApi");
__exportStar(require("./edgeFunctionsApi"), exports);
var edgeFunctionsApi_1 = require("./edgeFunctionsApi");
__exportStar(require("./eventsApi"), exports);
var eventsApi_1 = require("./eventsApi");
__exportStar(require("./functionsApi"), exports);
var functionsApi_1 = require("./functionsApi");
__exportStar(require("./iAMGroupsApi"), exports);
var iAMGroupsApi_1 = require("./iAMGroupsApi");
__exportStar(require("./iAMRolesApi"), exports);
var iAMRolesApi_1 = require("./iAMRolesApi");
__exportStar(require("./iAMUsersApi"), exports);
var iAMUsersApi_1 = require("./iAMUsersApi");
__exportStar(require("./labelsApi"), exports);
var labelsApi_1 = require("./labelsApi");
__exportStar(require("./monthlyTrackedUsersApi"), exports);
var monthlyTrackedUsersApi_1 = require("./monthlyTrackedUsersApi");
__exportStar(require("./profilesSyncApi"), exports);
var profilesSyncApi_1 = require("./profilesSyncApi");
__exportStar(require("./reverseETLApi"), exports);
var reverseETLApi_1 = require("./reverseETLApi");
__exportStar(require("./selectiveSyncApi"), exports);
var selectiveSyncApi_1 = require("./selectiveSyncApi");
__exportStar(require("./sourcesApi"), exports);
var sourcesApi_1 = require("./sourcesApi");
__exportStar(require("./spaceFiltersApi"), exports);
var spaceFiltersApi_1 = require("./spaceFiltersApi");
__exportStar(require("./spacesApi"), exports);
var spacesApi_1 = require("./spacesApi");
__exportStar(require("./testingApi"), exports);
var testingApi_1 = require("./testingApi");
__exportStar(require("./trackingPlansApi"), exports);
var trackingPlansApi_1 = require("./trackingPlansApi");
__exportStar(require("./transformationsApi"), exports);
var transformationsApi_1 = require("./transformationsApi");
__exportStar(require("./warehousesApi"), exports);
var warehousesApi_1 = require("./warehousesApi");
__exportStar(require("./workspacesApi"), exports);
var workspacesApi_1 = require("./workspacesApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [
    aPICallsApi_1.APICallsApi,
    activationsApi_1.ActivationsApi,
    audiencesApi_1.AudiencesApi,
    auditTrailApi_1.AuditTrailApi,
    catalogApi_1.CatalogApi,
    computedTraitsApi_1.ComputedTraitsApi,
    customerInsightsApi_1.CustomerInsightsApi,
    dbtApi_1.DbtApi,
    deletionAndSuppressionApi_1.DeletionAndSuppressionApi,
    deliveryOverviewApi_1.DeliveryOverviewApi,
    destinationFiltersApi_1.DestinationFiltersApi,
    destinationsApi_1.DestinationsApi,
    edgeFunctionsApi_1.EdgeFunctionsApi,
    eventsApi_1.EventsApi,
    functionsApi_1.FunctionsApi,
    iAMGroupsApi_1.IAMGroupsApi,
    iAMRolesApi_1.IAMRolesApi,
    iAMUsersApi_1.IAMUsersApi,
    labelsApi_1.LabelsApi,
    monthlyTrackedUsersApi_1.MonthlyTrackedUsersApi,
    profilesSyncApi_1.ProfilesSyncApi,
    reverseETLApi_1.ReverseETLApi,
    selectiveSyncApi_1.SelectiveSyncApi,
    sourcesApi_1.SourcesApi,
    spaceFiltersApi_1.SpaceFiltersApi,
    spacesApi_1.SpacesApi,
    testingApi_1.TestingApi,
    trackingPlansApi_1.TrackingPlansApi,
    transformationsApi_1.TransformationsApi,
    warehousesApi_1.WarehousesApi,
    workspacesApi_1.WorkspacesApi,
];
function configureApis(token, headers) {
    if (headers === void 0) { headers = {}; }
    var apis = {
        apiCalls: new aPICallsApi_1.APICallsApi(),
        auditTrail: new auditTrailApi_1.AuditTrailApi(),
        catalog: new catalogApi_1.CatalogApi(),
        deletionAndSuppresion: new deletionAndSuppressionApi_1.DeletionAndSuppressionApi(),
        destinationFilters: new destinationFiltersApi_1.DestinationFiltersApi(),
        destinations: new destinationsApi_1.DestinationsApi(),
        edgeFunctions: new edgeFunctionsApi_1.EdgeFunctionsApi(),
        events: new eventsApi_1.EventsApi(),
        functions: new functionsApi_1.FunctionsApi(),
        iamGroups: new iAMGroupsApi_1.IAMGroupsApi(),
        iamRoles: new iAMRolesApi_1.IAMRolesApi(),
        iamUsers: new iAMUsersApi_1.IAMUsersApi(),
        labels: new labelsApi_1.LabelsApi(),
        monthlyTrackedUsers: new monthlyTrackedUsersApi_1.MonthlyTrackedUsersApi(),
        selectiveSync: new selectiveSyncApi_1.SelectiveSyncApi(),
        sources: new sourcesApi_1.SourcesApi(),
        spaces: new spacesApi_1.SpacesApi(),
        testing: new testingApi_1.TestingApi(),
        trackingPlans: new trackingPlansApi_1.TrackingPlansApi(),
        transformations: new transformationsApi_1.TransformationsApi(),
        warehouses: new warehousesApi_1.WarehousesApi(),
        workspaces: new workspacesApi_1.WorkspacesApi(),
    };
    for (var _i = 0, _a = Object.keys(apis); _i < _a.length; _i++) {
        var k = _a[_i];
        var key = k;
        headers['User-Agent'] = 'Public API SDK 59.8.0 (TypeScript)';
        apis[key].accessToken = token;
        apis[key].defaultHeaders = headers;
    }
    return apis;
}
exports.configureApis = configureApis;
function configureEuApis(token, headers) {
    if (headers === void 0) { headers = {}; }
    var basePath = 'https://eu1.api.segmentapis.com';
    var apis = {
        apiCalls: new aPICallsApi_1.APICallsApi(basePath),
        auditTrail: new auditTrailApi_1.AuditTrailApi(basePath),
        catalog: new catalogApi_1.CatalogApi(basePath),
        deletionAndSuppresion: new deletionAndSuppressionApi_1.DeletionAndSuppressionApi(basePath),
        destinationFilters: new destinationFiltersApi_1.DestinationFiltersApi(basePath),
        destinations: new destinationsApi_1.DestinationsApi(basePath),
        edgeFunctions: new edgeFunctionsApi_1.EdgeFunctionsApi(basePath),
        events: new eventsApi_1.EventsApi(basePath),
        functions: new functionsApi_1.FunctionsApi(basePath),
        iamGroups: new iAMGroupsApi_1.IAMGroupsApi(basePath),
        iamRoles: new iAMRolesApi_1.IAMRolesApi(basePath),
        iamUsers: new iAMUsersApi_1.IAMUsersApi(basePath),
        labels: new labelsApi_1.LabelsApi(basePath),
        monthlyTrackedUsers: new monthlyTrackedUsersApi_1.MonthlyTrackedUsersApi(basePath),
        selectiveSync: new selectiveSyncApi_1.SelectiveSyncApi(basePath),
        sources: new sourcesApi_1.SourcesApi(basePath),
        spaces: new spacesApi_1.SpacesApi(basePath),
        testing: new testingApi_1.TestingApi(basePath),
        trackingPlans: new trackingPlansApi_1.TrackingPlansApi(basePath),
        transformations: new transformationsApi_1.TransformationsApi(basePath),
        warehouses: new warehousesApi_1.WarehousesApi(basePath),
        workspaces: new workspacesApi_1.WorkspacesApi(basePath),
    };
    for (var _i = 0, _a = Object.keys(apis); _i < _a.length; _i++) {
        var k = _a[_i];
        var key = k;
        headers['User-Agent'] = 'Public API SDK 59.8.0 (TypeScript)';
        apis[key].accessToken = token;
        apis[key].defaultHeaders = headers;
    }
    return apis;
}
exports.configureEuApis = configureEuApis;
function unwrap(promise, fallback) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, promise.catch(function (e) {
                        throw e.body.errors[0];
                    })];
                case 1:
                    response = _a.sent();
                    if (response.body === undefined || response.body.data === undefined) {
                        throw new Error(fallback !== null && fallback !== void 0 ? fallback : 'Could not load data');
                    }
                    return [2, response.body.data];
            }
        });
    });
}
exports.unwrap = unwrap;
//# sourceMappingURL=apis.js.map