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
exports.WarehousesApi = exports.WarehousesApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.segmentapis.com';
var WarehousesApiApiKeys;
(function (WarehousesApiApiKeys) {
})(WarehousesApiApiKeys = exports.WarehousesApiApiKeys || (exports.WarehousesApiApiKeys = {}));
var WarehousesApi = (function () {
    function WarehousesApi(basePathOrUsername, password, basePath) {
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
    Object.defineProperty(WarehousesApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WarehousesApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WarehousesApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    WarehousesApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    WarehousesApi.prototype.setApiKey = function (key, value) {
        this.authentications[WarehousesApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(WarehousesApi.prototype, "accessToken", {
        set: function (accessToken) {
            this.authentications.token.accessToken = accessToken;
        },
        enumerable: false,
        configurable: true
    });
    WarehousesApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    WarehousesApi.prototype.addConnectionFromSourceToWarehouseAlpha = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling addConnectionFromSourceToWarehouseAlpha.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling addConnectionFromSourceToWarehouseAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'AddConnectionFromSourceToWarehouse200Response');
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
    WarehousesApi.prototype.addConnectionFromSourceToWarehouseBeta = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling addConnectionFromSourceToWarehouseBeta.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling addConnectionFromSourceToWarehouseBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'AddConnectionFromSourceToWarehouse200Response');
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
    WarehousesApi.prototype.addConnectionFromSourceToWarehouseCurrent = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling addConnectionFromSourceToWarehouseCurrent.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling addConnectionFromSourceToWarehouseCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'AddConnectionFromSourceToWarehouse200Response');
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
    WarehousesApi.prototype.addConnectionFromSourceToWarehouseV1 = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_4, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling addConnectionFromSourceToWarehouseV1.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling addConnectionFromSourceToWarehouseV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'AddConnectionFromSourceToWarehouse200Response');
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
    WarehousesApi.prototype.createValidationInWarehouseAlpha = function (CreateValidationInWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_5, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses/validation';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateValidationInWarehouseV1Input === null ||
                    CreateValidationInWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateValidationInWarehouseV1Input was null or undefined when calling createValidationInWarehouseAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateValidationInWarehouseV1Input, 'CreateValidationInWarehouseV1Input'),
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateValidationInWarehouse200Response');
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
    WarehousesApi.prototype.createValidationInWarehouseBeta = function (CreateValidationInWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_6, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses/validation';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateValidationInWarehouseV1Input === null ||
                    CreateValidationInWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateValidationInWarehouseV1Input was null or undefined when calling createValidationInWarehouseBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateValidationInWarehouseV1Input, 'CreateValidationInWarehouseV1Input'),
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateValidationInWarehouse200Response');
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
    WarehousesApi.prototype.createValidationInWarehouseCurrent = function (CreateValidationInWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_7, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses/validation';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateValidationInWarehouseV1Input === null ||
                    CreateValidationInWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateValidationInWarehouseV1Input was null or undefined when calling createValidationInWarehouseCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateValidationInWarehouseV1Input, 'CreateValidationInWarehouseV1Input'),
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
                _loop_7 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_7(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateValidationInWarehouse200Response');
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
    WarehousesApi.prototype.createValidationInWarehouseV1 = function (CreateValidationInWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_8, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses/validation';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateValidationInWarehouseV1Input === null ||
                    CreateValidationInWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateValidationInWarehouseV1Input was null or undefined when calling createValidationInWarehouseV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateValidationInWarehouseV1Input, 'CreateValidationInWarehouseV1Input'),
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
                _loop_8 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_8(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateValidationInWarehouse200Response');
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
    WarehousesApi.prototype.createWarehouseAlpha = function (CreateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_9, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateWarehouseV1Input === null ||
                    CreateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateWarehouseV1Input was null or undefined when calling createWarehouseAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateWarehouseV1Input, 'CreateWarehouseV1Input'),
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
                _loop_9 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_9(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateWarehouse200Response');
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
    WarehousesApi.prototype.createWarehouseBeta = function (CreateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_10, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateWarehouseV1Input === null ||
                    CreateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateWarehouseV1Input was null or undefined when calling createWarehouseBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateWarehouseV1Input, 'CreateWarehouseV1Input'),
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
                _loop_10 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_10(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateWarehouse200Response');
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
    WarehousesApi.prototype.createWarehouseCurrent = function (CreateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_11, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateWarehouseV1Input === null ||
                    CreateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateWarehouseV1Input was null or undefined when calling createWarehouseCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateWarehouseV1Input, 'CreateWarehouseV1Input'),
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
                _loop_11 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_11(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateWarehouse200Response');
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
    WarehousesApi.prototype.createWarehouseV1 = function (CreateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_12, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateWarehouseV1Input === null ||
                    CreateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter CreateWarehouseV1Input was null or undefined when calling createWarehouseV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateWarehouseV1Input, 'CreateWarehouseV1Input'),
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
                _loop_12 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_12(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateWarehouse200Response');
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
    WarehousesApi.prototype.deleteWarehouseAlpha = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_13, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling deleteWarehouseAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_13 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_13(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteWarehouse200Response');
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
    WarehousesApi.prototype.deleteWarehouseBeta = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_14, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling deleteWarehouseBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_14 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_14(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteWarehouse200Response');
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
    WarehousesApi.prototype.deleteWarehouseCurrent = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_15, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling deleteWarehouseCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_15 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_15(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteWarehouse200Response');
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
    WarehousesApi.prototype.deleteWarehouseV1 = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_16, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling deleteWarehouseV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_16 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_16(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteWarehouse200Response');
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
    WarehousesApi.prototype.getConnectionStateFromWarehouseAlpha = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_17, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connection-state'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getConnectionStateFromWarehouseAlpha.');
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
                _loop_17 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_17(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetConnectionStateFromWarehouse200Response');
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
    WarehousesApi.prototype.getConnectionStateFromWarehouseBeta = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_18, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connection-state'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getConnectionStateFromWarehouseBeta.');
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
                _loop_18 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_18(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetConnectionStateFromWarehouse200Response');
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
    WarehousesApi.prototype.getConnectionStateFromWarehouseCurrent = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_19, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connection-state'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getConnectionStateFromWarehouseCurrent.');
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
                _loop_19 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_19(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetConnectionStateFromWarehouse200Response');
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
    WarehousesApi.prototype.getConnectionStateFromWarehouseV1 = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_20, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connection-state'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getConnectionStateFromWarehouseV1.');
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
                _loop_20 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_20(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetConnectionStateFromWarehouse200Response');
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
    WarehousesApi.prototype.getWarehouseAlpha = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_21, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getWarehouseAlpha.');
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
                _loop_21 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_21(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetWarehouse200Response');
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
    WarehousesApi.prototype.getWarehouseBeta = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_22, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getWarehouseBeta.');
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
                _loop_22 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_22(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetWarehouse200Response');
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
    WarehousesApi.prototype.getWarehouseCurrent = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_23, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getWarehouseCurrent.');
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
                _loop_23 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_23(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetWarehouse200Response');
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
    WarehousesApi.prototype.getWarehouseV1 = function (warehouseId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_24, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling getWarehouseV1.');
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
                _loop_24 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_24(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetWarehouse200Response');
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
    WarehousesApi.prototype.listConnectedSourcesFromWarehouseAlpha = function (warehouseId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_25, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listConnectedSourcesFromWarehouseAlpha.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listConnectedSourcesFromWarehouseAlpha.');
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
                _loop_25 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_25(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListConnectedSourcesFromWarehouse200Response');
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
    WarehousesApi.prototype.listConnectedSourcesFromWarehouseBeta = function (warehouseId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_26, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listConnectedSourcesFromWarehouseBeta.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listConnectedSourcesFromWarehouseBeta.');
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
                _loop_26 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_26(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListConnectedSourcesFromWarehouse200Response');
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
    WarehousesApi.prototype.listConnectedSourcesFromWarehouseCurrent = function (warehouseId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_27, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listConnectedSourcesFromWarehouseCurrent.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listConnectedSourcesFromWarehouseCurrent.');
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
                _loop_27 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_27(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListConnectedSourcesFromWarehouse200Response');
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
    WarehousesApi.prototype.listConnectedSourcesFromWarehouseV1 = function (warehouseId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_28, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling listConnectedSourcesFromWarehouseV1.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listConnectedSourcesFromWarehouseV1.');
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
                _loop_28 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_28(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListConnectedSourcesFromWarehouse200Response');
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
    WarehousesApi.prototype.listWarehousesAlpha = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_29, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listWarehousesAlpha.');
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
                _loop_29 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_29(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListWarehouses200Response');
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
    WarehousesApi.prototype.listWarehousesBeta = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_30, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listWarehousesBeta.');
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
                _loop_30 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_30(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListWarehouses200Response');
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
    WarehousesApi.prototype.listWarehousesCurrent = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_31, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listWarehousesCurrent.');
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
                _loop_31 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_31(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListWarehouses200Response');
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
    WarehousesApi.prototype.listWarehousesV1 = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_32, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/warehouses';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listWarehousesV1.');
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
                _loop_32 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_32(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListWarehouses200Response');
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
    WarehousesApi.prototype.removeSourceConnectionFromWarehouseAlpha = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_33, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling removeSourceConnectionFromWarehouseAlpha.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling removeSourceConnectionFromWarehouseAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_33 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_33(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'RemoveSourceConnectionFromWarehouse200Response');
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
    WarehousesApi.prototype.removeSourceConnectionFromWarehouseBeta = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_34, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling removeSourceConnectionFromWarehouseBeta.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling removeSourceConnectionFromWarehouseBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_34 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_34(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'RemoveSourceConnectionFromWarehouse200Response');
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
    WarehousesApi.prototype.removeSourceConnectionFromWarehouseCurrent = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_35, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling removeSourceConnectionFromWarehouseCurrent.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling removeSourceConnectionFromWarehouseCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_35 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_35(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'RemoveSourceConnectionFromWarehouse200Response');
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
    WarehousesApi.prototype.removeSourceConnectionFromWarehouseV1 = function (warehouseId, sourceId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_36, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}/connected-sources/{sourceId}'
                        .replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)))
                        .replace('{' + 'sourceId' + '}', encodeURIComponent(String(sourceId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling removeSourceConnectionFromWarehouseV1.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling removeSourceConnectionFromWarehouseV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
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
                _loop_36 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_36(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'RemoveSourceConnectionFromWarehouse200Response');
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
    WarehousesApi.prototype.updateWarehouseAlpha = function (warehouseId, UpdateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_37, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling updateWarehouseAlpha.');
                }
                if (UpdateWarehouseV1Input === null ||
                    UpdateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter UpdateWarehouseV1Input was null or undefined when calling updateWarehouseAlpha.');
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
                    body: models_1.ObjectSerializer.serialize(UpdateWarehouseV1Input, 'UpdateWarehouseV1Input'),
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
                _loop_37 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_37(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateWarehouse200Response');
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
    WarehousesApi.prototype.updateWarehouseBeta = function (warehouseId, UpdateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_38, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling updateWarehouseBeta.');
                }
                if (UpdateWarehouseV1Input === null ||
                    UpdateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter UpdateWarehouseV1Input was null or undefined when calling updateWarehouseBeta.');
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
                    body: models_1.ObjectSerializer.serialize(UpdateWarehouseV1Input, 'UpdateWarehouseV1Input'),
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
                _loop_38 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_38(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateWarehouse200Response');
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
    WarehousesApi.prototype.updateWarehouseCurrent = function (warehouseId, UpdateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_39, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling updateWarehouseCurrent.');
                }
                if (UpdateWarehouseV1Input === null ||
                    UpdateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter UpdateWarehouseV1Input was null or undefined when calling updateWarehouseCurrent.');
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
                    body: models_1.ObjectSerializer.serialize(UpdateWarehouseV1Input, 'UpdateWarehouseV1Input'),
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
                _loop_39 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_39(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateWarehouse200Response');
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
    WarehousesApi.prototype.updateWarehouseV1 = function (warehouseId, UpdateWarehouseV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_40, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/warehouses/{warehouseId}'.replace('{' + 'warehouseId' + '}', encodeURIComponent(String(warehouseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (warehouseId === null || warehouseId === undefined) {
                    throw new Error('Required parameter warehouseId was null or undefined when calling updateWarehouseV1.');
                }
                if (UpdateWarehouseV1Input === null ||
                    UpdateWarehouseV1Input === undefined) {
                    throw new Error('Required parameter UpdateWarehouseV1Input was null or undefined when calling updateWarehouseV1.');
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
                    body: models_1.ObjectSerializer.serialize(UpdateWarehouseV1Input, 'UpdateWarehouseV1Input'),
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
                _loop_40 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_40(interceptor);
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
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateWarehouse200Response');
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
    return WarehousesApi;
}());
exports.WarehousesApi = WarehousesApi;
//# sourceMappingURL=warehousesApi.js.map