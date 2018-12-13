const api = process.env.BASE_API;

export const post = (body, path) => (
{
    host: api,
    method: 'POST',
    body: JSON.stringify(body),
    url: `https://${ api }${ path }`,
    path
});