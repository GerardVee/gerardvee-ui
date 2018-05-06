export default (data) => (
    {
        body: JSON.stringify(data),
        mode: 'cors',
        method: 'post',
        headers:
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
);