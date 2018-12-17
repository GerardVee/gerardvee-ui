const api = process.env.BASE_API;

export const post = (body, path) => ({
    service: 'execute-api',
    host: api,
    method: 'POST',
    body: JSON.stringify(body),
    url: `https://${ api }${ path }`,
    path
});

export const patch = (body, path) => ({
    service: 'execute-api',
    host: api,
    method: 'PATCH',
    body: JSON.stringify(body),
    url: `https://${ api }${ path }`,
    path
});

export const deleteR = (body, path) => ({
    service: 'execute-api',
    host: api,
    method: 'DELETE',
    body: JSON.stringify(body),
    url: `https://${ api }${ path }`,
    path
});