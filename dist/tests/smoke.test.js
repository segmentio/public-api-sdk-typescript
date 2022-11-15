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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var apis_1 = require("../api/apis");
var TEST_TOKEN = '1ba60ccaae1c1a5230';
var server = http_1.default.createServer();
function makeServer(response, statusCode) {
    if (statusCode === void 0) { statusCode = 200; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    server = http_1.default.createServer(function (req, res) {
                        expect(req).toMatchSnapshot({
                            client: expect.any(Object),
                            socket: expect.any(Object),
                        });
                        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(response));
                    });
                    server.on('error', reject);
                    var port = 52338;
                    server.listen(port, function () {
                        var url = "http://localhost:".concat(port);
                        var client = new apis_1.SourcesApi(url);
                        client.accessToken = TEST_TOKEN;
                        resolve(client);
                    });
                })];
        });
    });
}
describe('Smoke tests', function () {
    afterEach(function () {
        if (server.listening) {
            server.close();
        }
    });
    it('sends correct request and parses response for create', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedCreate, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        data: {
                            source: {
                                id: 'source-id',
                                slug: 'my-test-source',
                                name: 'my-test-source',
                                workspaceId: 'workspace-id',
                                enabled: true,
                                writeKeys: ['write-key'],
                                metadata: {
                                    id: 'IqDTy1TpoU',
                                    slug: 'javascript',
                                    name: 'Javascript',
                                    categories: ['Website'],
                                    description: 'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                                    logos: {
                                        default: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                                    },
                                    options: [],
                                    isCloudEventSource: false,
                                },
                                settings: {},
                                labels: [],
                            },
                        },
                    })];
                case 1:
                    mockedCreate = _a.sent();
                    return [4, mockedCreate.createSource({
                            enabled: true,
                            metadataId: 'IqDTy1TpoU',
                            slug: 'my-test-source',
                        })];
                case 2:
                    resp = _a.sent();
                    expect(resp).toMatchSnapshot({
                        response: {
                            headers: {
                                date: expect.any(String),
                            },
                            request: expect.any(Object),
                        },
                    });
                    return [2];
            }
        });
    }); });
    it('sends correct request and parses response for read', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedRead, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        data: {
                            source: {
                                id: 'source-id',
                                slug: 'my-test-source',
                                name: 'my-test-source',
                                workspaceId: 'workspace-id',
                                enabled: true,
                                writeKeys: ['write-key'],
                                metadata: {
                                    id: 'IqDTy1TpoU',
                                    slug: 'javascript',
                                    name: 'Javascript',
                                    categories: ['Website'],
                                    description: 'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                                    logos: {
                                        default: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                                    },
                                    options: [],
                                    isCloudEventSource: false,
                                },
                                settings: {},
                                labels: [],
                            },
                        },
                    })];
                case 1:
                    mockedRead = _a.sent();
                    return [4, mockedRead.getSource('source-id')];
                case 2:
                    resp = _a.sent();
                    expect(resp).toMatchSnapshot({
                        response: {
                            headers: {
                                date: expect.any(String),
                            },
                            request: expect.any(Object),
                        },
                    });
                    return [2];
            }
        });
    }); });
    it('sends correct request and parses response for list', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedList, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        data: {
                            sources: [
                                {
                                    id: 'source-id',
                                    slug: 'my-test-source',
                                    name: 'my-test-source',
                                    workspaceId: 'workspace-id',
                                    enabled: true,
                                    writeKeys: ['write-key'],
                                    metadata: {
                                        id: 'IqDTy1TpoU',
                                        slug: 'javascript',
                                        name: 'Javascript',
                                        categories: ['Website'],
                                        description: 'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                                        logos: {
                                            default: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                            alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                            mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                                        },
                                        options: [],
                                        isCloudEventSource: false,
                                    },
                                    settings: {},
                                    labels: [],
                                },
                            ],
                            pagination: {
                                current: 'MA==',
                                next: 'MQ==',
                                totalEntries: 63,
                            },
                        },
                    })];
                case 1:
                    mockedList = _a.sent();
                    return [4, mockedList.listSources({ count: 1 })];
                case 2:
                    resp = _a.sent();
                    expect(resp).toMatchSnapshot({
                        response: {
                            headers: {
                                date: expect.any(String),
                            },
                            request: expect.any(Object),
                        },
                    });
                    return [2];
            }
        });
    }); });
    it('sends correct request and parses response for update', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedUpdate, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        data: {
                            source: {
                                id: 'source-id',
                                slug: 'my-test-source',
                                name: 'My updated source',
                                workspaceId: 'workspace-id',
                                enabled: false,
                                writeKeys: ['write-key'],
                                metadata: {
                                    id: 'IqDTy1TpoU',
                                    slug: 'javascript',
                                    name: 'Javascript',
                                    categories: ['Website'],
                                    description: 'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                                    logos: {
                                        default: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                        mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                                    },
                                    options: [],
                                    isCloudEventSource: false,
                                },
                                settings: {},
                                labels: [],
                            },
                        },
                    })];
                case 1:
                    mockedUpdate = _a.sent();
                    return [4, mockedUpdate.updateSource('source-id', {
                            name: 'My updated source',
                            enabled: false,
                        })];
                case 2:
                    resp = _a.sent();
                    expect(resp).toMatchSnapshot({
                        response: {
                            headers: {
                                date: expect.any(String),
                            },
                            request: expect.any(Object),
                        },
                    });
                    return [2];
            }
        });
    }); });
    it('sends correct request and parses response for delete', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedDelete, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        data: {
                            status: 'SUCCESS',
                        },
                    })];
                case 1:
                    mockedDelete = _a.sent();
                    return [4, mockedDelete.deleteSource('my-source')];
                case 2:
                    resp = _a.sent();
                    expect(resp).toMatchSnapshot({
                        response: {
                            headers: {
                                date: expect.any(String),
                            },
                            request: expect.any(Object),
                        },
                    });
                    return [2];
            }
        });
    }); });
    it('parses errors correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedDelete, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, makeServer({
                        errors: [
                            {
                                type: 'not-found',
                                message: "Source with id '404' not found.",
                                data: null,
                            },
                        ],
                    }, 404)];
                case 1:
                    mockedDelete = _a.sent();
                    resp = mockedDelete.deleteSource('404');
                    return [4, expect(resp).rejects.toMatchSnapshot()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=smoke.test.js.map