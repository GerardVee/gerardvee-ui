export default (data) => (
    {
        body: JSON.stringify(data),
        mode: 'no-cors',
        method: 'post',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
);