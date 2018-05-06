export default (data) => (
    {
        body: JSON.stringify(data),
        mode: 'cors',
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
);