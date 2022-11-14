"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectiveSyncApi = exports.SelectiveSyncApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.segmentapis.com';
var SelectiveSyncApiApiKeys;
(function (SelectiveSyncApiApiKeys) {
})(SelectiveSyncApiApiKeys = exports.SelectiveSyncApiApiKeys || (exports.SelectiveSyncApiApiKeys = {}));
var SelectiveSyncApi = (function () {
    function SelectiveSyncApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            default: new models_1.VoidAuth(),
            token: new models_2.HttpBearerAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SelectiveSyncApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectiveSyncApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectiveSyncApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    SelectiveSyncApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SelectiveSyncApi.prototype.setApiKey = function (key, value) {
        this.authentications[SelectiveSyncApiApiKeys[key]].apiKey =
            value;
    };
    Object.defineProperty(SelectiveSyncApi.prototype, "accessToken", {
        set: function (accessToken) {
            this.authentications.token.accessToken = accessToken;
        },
        enumerable: false,
        configurable: true
    });
    SelectiveSyncApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    SelectiveSyncApi.prototype.getAdvancedSyncScheduleFromWarehouse = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/advanced-sync-schedule'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getAdvancedSyncScheduleFromWarehouse.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetAdvancedSyncScheduleFromWarehouse200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SelectiveSyncApi.prototype.listSelectiveSyncsFromWarehouseAndSource = function (warehouseId, sourceId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}/selective-syncs'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSource.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSource.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listSelectiveSyncsFromWarehouseAndSource.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListSelectiveSyncsFromWarehouseAndSource200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SelectiveSyncApi.prototype.listSyncsFromWarehouse = function (warehouseId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/syncs'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listSyncsFromWarehouse.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listSyncsFromWarehouse.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_3 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_3(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListSyncsFromWarehouse200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SelectiveSyncApi.prototype.listSyncsFromWarehouseAndSource = function (warehouseId, sourceId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_4, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}/syncs'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listSyncsFromWarehouseAndSource.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling listSyncsFromWarehouseAndSource.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listSyncsFromWarehouseAndSource.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_4 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_4(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListSyncsFromWarehouseAndSource200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SelectiveSyncApi.prototype.replaceAdvancedSyncScheduleForWarehouse = function (warehouseId, ReplaceAdvancedSyncScheduleForWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_5, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/advanced-sync-schedule'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling replaceAdvancedSyncScheduleForWarehouse.');
                }
                if (ReplaceAdvancedSyncScheduleForWarehouseV1Input === null ||
                    ReplaceAdvancedSyncScheduleForWarehouseV1Input === undefined) {
                    throw new Error('Required parameter ReplaceAdvancedSyncScheduleForWarehouseV1Input was null or undefined when calling replaceAdvancedSyncScheduleForWarehouse.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(ReplaceAdvancedSyncScheduleForWarehouseV1Input, 'ReplaceAdvancedSyncScheduleForWarehouseV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_5 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_5(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ReplaceAdvancedSyncScheduleForWarehouse200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SelectiveSyncApi.prototype.updateSelectiveSyncForWarehouse = function (warehouseId, UpdateSelectiveSyncForWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_6, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/selective-sync'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                    'application/vnd.segment.v1beta+json',
                    'application/vnd.segment.v1alpha+json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling updateSelectiveSyncForWarehouse.');
                }
                if (UpdateSelectiveSyncForWarehouseV1Input === null ||
                    UpdateSelectiveSyncForWarehouseV1Input === undefined) {
                    throw new Error('Required parameter UpdateSelectiveSyncForWarehouseV1Input was null or undefined when calling updateSelectiveSyncForWarehouse.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateSelectiveSyncForWarehouseV1Input, 'UpdateSelectiveSyncForWarehouseV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_6 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_6(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateSelectiveSyncForWarehouse200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return SelectiveSyncApi;
}());
exports.SelectiveSyncApi = SelectiveSyncApi;
//# sourceMappingURL=selectiveSyncApi.js.map