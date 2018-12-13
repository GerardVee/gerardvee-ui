export const post = (body, sign) => (
{
    ...sign,
    headers: new Headers(
    {
        'Content-Type': 'application/json',
        ...sign.headers,
    }),
    body: JSON.stringify(body),
    method: 'POST'
});