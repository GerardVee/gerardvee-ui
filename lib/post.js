export default (data) => (
    {
        body: JSON.stringify(data),
        credentials: 'include',
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    }
);