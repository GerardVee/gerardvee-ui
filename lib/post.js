export default (data) => (
    {
        body: JSON.stringify(data),
        mode: 'cors',
        method: 'POST',
        headers: new Headers(
        {
            'Content-Type': 'text/plain'
        })
    }
);