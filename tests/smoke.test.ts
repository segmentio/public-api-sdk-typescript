import http from 'http';
import { SourcesApi } from '../api/apis';
const TEST_TOKEN = '1ba60ccaae1c1a5230';

// Keep track of the current server to close it before each test
let server = http.createServer();

async function makeServer(
    response: any,
    statusCode = 200
): Promise<SourcesApi> {
    return new Promise((resolve, reject) => {
        server = http.createServer(function (req, res) {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                // Snapshot only the parts of the request the SDK controls. Serializing the whole IncomingMessage
                // captures Node's stream internals (e.g. highWaterMark), and Node adds headers such as `connection`
                // and `host` itself, so both change between Node versions and environments. The body covers what
                // `content-length` used to.
                const headers: Record<string, string | string[] | undefined> =
                    {};
                for (const name of [
                    'accept',
                    'authorization',
                    'content-type',
                ]) {
                    if (name in req.headers) headers[name] = req.headers[name];
                }
                expect({
                    method: req.method,
                    url: req.url,
                    headers,
                    body,
                }).toMatchSnapshot();
                res.writeHead(statusCode, {
                    'Content-Type': 'application/json',
                });
                res.end(JSON.stringify(response));
            });
        });

        server.on('error', reject);

        const port = 52338;
        server.listen(port, () => {
            const url = `http://localhost:${port}`;
            const client = new SourcesApi(url);
            client.accessToken = TEST_TOKEN;
            resolve(client);
        });
    });
}
// Node 19 made keep-alive the default for the HTTP client, which adds these response headers on newer Node only.
function dropConnectionHeaders(resp: any): void {
    delete resp.response.headers['connection'];
    delete resp.response.headers['keep-alive'];
}

describe('Smoke tests', () => {
    afterEach(() => {
        if (server.listening) {
            server.close();
        }
    });

    it('sends correct request and parses response for create', async () => {
        const mockedCreate = await makeServer({
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
                        description:
                            'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                        logos: {
                            default:
                                'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                        },
                        options: [],
                        partnerOwned: false,
                        status: 'PUBLIC',
                        isCloudEventSource: false,
                    },
                    settings: {},
                    labels: [],
                },
            },
        });

        const resp = await mockedCreate.createSource({
            enabled: true,
            metadataId: 'IqDTy1TpoU',
            slug: 'my-test-source',
        });

        dropConnectionHeaders(resp);
        expect(resp).toMatchSnapshot({
            response: {
                headers: {
                    date: expect.any(String),
                },
                request: expect.any(Object),
            },
        });
    });

    it('sends correct request and parses response for read', async () => {
        const mockedRead = await makeServer({
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
                        description:
                            'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                        logos: {
                            default:
                                'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                        },
                        options: [],
                        partnerOwned: false,
                        status: 'PUBLIC',
                        isCloudEventSource: false,
                    },
                    settings: {},
                    labels: [],
                },
                trackingPlanId: null,
            },
        });

        const resp = await mockedRead.getSource('source-id');

        dropConnectionHeaders(resp);
        expect(resp).toMatchSnapshot({
            response: {
                headers: {
                    date: expect.any(String),
                },
                request: expect.any(Object),
            },
        });
    });

    it('sends correct request and parses response for list', async () => {
        const mockedList = await makeServer({
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
                            description:
                                'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                            logos: {
                                default:
                                    'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                                mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                            },
                            options: [],
                            partnerOwned: false,
                            status: 'PUBLIC',
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
        });

        const resp = await mockedList.listSources({ count: 1 });

        dropConnectionHeaders(resp);
        expect(resp).toMatchSnapshot({
            response: {
                headers: {
                    date: expect.any(String),
                },
                request: expect.any(Object),
            },
        });
    });

    it('sends correct request and parses response for update', async () => {
        const mockedUpdate = await makeServer({
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
                        description:
                            'This is our most flexible and powerful tracking system, using analytics.js.  Track and analyze information about your visitors and customers, and every action that they take, in any of our 140 integrations, business intelligence tools, or directly with SQL tools.',
                        logos: {
                            default:
                                'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            alt: 'https://cdn.filepicker.io/api/file/aRgo4XJQZausZxD4gZQq',
                            mark: 'https://cdn.filepicker.io/api/file/kBpmEoSSaakidAvoFmzd',
                        },
                        options: [],
                        partnerOwned: false,
                        status: 'PUBLIC',
                        isCloudEventSource: false,
                    },
                    settings: {},
                    labels: [],
                },
            },
        });

        const resp = await mockedUpdate.updateSource('source-id', {
            name: 'My updated source',
            enabled: false,
        });

        dropConnectionHeaders(resp);
        expect(resp).toMatchSnapshot({
            response: {
                headers: {
                    date: expect.any(String),
                },
                request: expect.any(Object),
            },
        });
    });

    it('sends correct request and parses response for delete', async () => {
        const mockedDelete = await makeServer({
            data: {
                status: 'SUCCESS',
            },
        });

        const resp = await mockedDelete.deleteSource('my-source');

        dropConnectionHeaders(resp);
        expect(resp).toMatchSnapshot({
            response: {
                headers: {
                    date: expect.any(String),
                },
                request: expect.any(Object),
            },
        });
    });

    it('parses errors correctly', async () => {
        const mockedDelete = await makeServer(
            {
                errors: [
                    {
                        type: 'not-found',
                        message: "Source with id '404' not found.",
                        data: null,
                    },
                ],
            },
            404
        );

        const resp = mockedDelete.deleteSource('404');

        await expect(resp).rejects.toMatchSnapshot();
    });
});
