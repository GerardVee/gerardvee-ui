export default (data) => (
    {
        body: JSON.stringify(data),
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    }
);